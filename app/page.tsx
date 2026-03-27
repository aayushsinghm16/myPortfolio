import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ThemeSelector from '../components/ThemeSelector';

export default function Page() {
    return (
        <>
            <ThemeSelector />
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
        </>
    );
}
