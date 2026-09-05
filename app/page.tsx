import React from 'react';
import HeroSection from '../components/HeroSection';
import PrinciplesSection from '../components/PrinciplesSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import TrackRecordSection from '../components/TrackRecordSection';
import ContactCta from '../components/ContactCta';

// Every section below is a server component: no client JS, nothing hidden at
// rest. ThemeSelector and PortfolioChat mount globally via DeferredWidgets.
export default function Page() {
    return (
        <>
            <HeroSection />
            <PrinciplesSection />
            <ProjectsSection />
            <SkillsSection />
            <TrackRecordSection />
            <ContactCta />
        </>
    );
}
