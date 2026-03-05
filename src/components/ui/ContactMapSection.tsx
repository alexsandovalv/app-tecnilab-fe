'use client';

import {useState} from 'react';
import {Box, Container, Typography, Stack, Grid, Link} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {useTranslations} from 'next-intl';

const locations = {
    sanIsidro: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.210111562382!2d-77.03189572434061!3d-12.097763688143075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9f62beb6c9f%3A0x1e2b0a315095dd62!2sTECNILAB!5e0!3m2!1ses-419!2spe!4v1772676854914!5m2!1ses-419!2spe',
    miraflores: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.055983716569!2d-77.03120538687511!3d-12.116618321676551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c816d742d787%3A0x6c12c8fdd0b820b7!2sCompu%20Palace!5e0!3m2!1ses-419!2spe!4v1772676773732!5m2!1ses-419!2spe',
    jesusMaria: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5318220714034!2d-77.04001752434093!3d-12.07570018816341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c90017f0b37d%3A0xc70829056f708c37!2sTECNILAB%20Jes%C3%BAs%20Mar%C3%ADa!5e0!3m2!1ses-419!2spe!4v1772676478276!5m2!1ses-419!2spe'
};

const contactItems = [
    {id: 'sanIsidro', titleKey: 'hq1Title', textKey: 'hq1', icon: LocationOnIcon, iconBg: '#000'},
    {id: 'miraflores', titleKey: 'hq2Title', textKey: 'hq2', icon: LocationOnIcon, iconBg: '#000'},
    {id: 'jesusMaria', titleKey: 'hq3Title', textKey: 'hq3', icon: LocationOnIcon, iconBg: '#000'},
];

interface ContactItemProps {
    icon: typeof LocationOnIcon;
    iconBg: string;
    title: string;
    text: string;
    onClick?: () => void;
    isSelected?: boolean;
    href?: string;
}

function ContactItem({icon: Icon, iconBg, title, text, onClick, isSelected, href}: ContactItemProps) {
    const content = (
        <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            onClick={onClick}
            sx={{
                cursor: 'pointer',
                p: 1.35,
                borderRadius: '16px',
                transition: 'all 0.3s',
                bgcolor: isSelected ? '#f0f0f5' : 'transparent',
                '&:hover': { bgcolor: '#f0f0f5' }
            }}
        >
            <Box sx={{bgcolor: iconBg, p: 1.5, borderRadius: '12px', color: '#fff'}}>
                <Icon/>
            </Box>
            <Box>
                <Typography variant="subtitle1" sx={{fontWeight: 700}}>{title}</Typography>
                <Typography variant="body1" color="text.secondary">{text}</Typography>
            </Box>
        </Stack>
    );

    return href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer" sx={{textDecoration: 'none', color: 'inherit'}}>
            {content}
        </Link>
    ) : content;
}

export default function ContactMapSection() {
    const t = useTranslations('HomePage.contact');
    const [selectedLocation, setSelectedLocation] = useState<keyof typeof locations>('sanIsidro');

    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent('Hola, ¿en qué te ayudo?')}`;

    return (
        <Box sx={{bgcolor: '#f5f5f7'}}>
            <Container maxWidth="lg" sx={{py: 10}}>
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{xs: 12, md: 5}}>
                        <Typography variant="h3" sx={{fontWeight: 800, mb: 4}}>
                            {t('title')}
                        </Typography>
                        <Stack spacing={1}>
                            {contactItems.map((item) => (
                                <ContactItem
                                    key={item.id}
                                    icon={item.icon}
                                    iconBg={item.iconBg}
                                    title={t(item.titleKey)}
                                    text={t(item.textKey)}
                                    onClick={() => setSelectedLocation(item.id as keyof typeof locations)}
                                    isSelected={selectedLocation === item.id}
                                />
                            ))}
                            <ContactItem
                                icon={PhoneIcon}
                                iconBg="#25D366"
                                title={t('whatsappTitle')}
                                text={t('phone')}
                                href={whatsappUrl}
                            />
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12, md: 7}}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                borderRadius: '30px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                border: '1px solid #d2d2d7'
                            }}
                        >
                            <iframe
                                key={selectedLocation}
                                src={locations[selectedLocation]}
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
