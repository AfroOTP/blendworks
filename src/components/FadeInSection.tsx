'use client';

import React, { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation, UseScrollAnimationOptions } from '../../src/hooks/useScrollAnimation';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

interface FadeInSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: AnimationDirection;
    duration?: number;
    options?: UseScrollAnimationOptions;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.8,
    options = {}
}) => {
    const { ref, isVisible } = useScrollAnimation(options);

    const getTransform = (): string => {
        if(isVisible) return 'translate(0,0)';

        switch (direction) {
            case 'up':
                return 'translateY(50px)';
            case 'down':
                return 'translateY(-50px)';
            case 'left':
                return 'translateX(50px)';
            case 'right':
                return 'translateX(-50px)';
            case 'fade':
                return 'translate(0, 0)';
            default:
                return 'translateY(50px)';
        }
    };

    const styles: CSSProperties = {
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s ease-out ${delay}s`,
    };

    return (
        <div ref={ref} style={styles} className={className}>
            {children}
        </div>
    )
}