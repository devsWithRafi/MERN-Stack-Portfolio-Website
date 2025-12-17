import { useEffect, useRef, useState, memo } from 'react';

const LogoLoop = memo(
    ({
        logos,
        speed = 120,
        direction = 'left',
        width = '100%',
        height = 'auto',
        logoSize = 28,
        gap = 32,
        pauseOnHover = true,
        hoverSpeed = 0,
        fadeOut = false,
        fadeColor,
        scaleOnHover = false,
        className = '',
        style = {},
    }) => {
        const containerRef = useRef(null);
        const trackRef = useRef(null);
        const [isHovered, setIsHovered] = useState(false);
        const rafRef = useRef(null);
        const lastTimeRef = useRef(null);
        const velocityRef = useRef(0);
        const offsetRef = useRef(0);

        // Calculate target velocity
        const getVelocity = () => {
            if (isHovered && pauseOnHover) return hoverSpeed;
            const dirMultiplier = direction === 'left' ? 1 : -1;
            return Math.abs(speed) * dirMultiplier;
        };

        // Animation loop
        useEffect(() => {
            const track = trackRef.current;
            if (!track) return;

            const prefersReduced = window.matchMedia?.(
                '(prefers-reduced-motion: reduce)'
            ).matches;
            if (prefersReduced) {
                track.style.transform = 'translate3d(0, 0, 0)';
                return;
            }

            const animate = (time) => {
                if (!lastTimeRef.current) lastTimeRef.current = time;

                const delta = (time - lastTimeRef.current) / 1000;
                lastTimeRef.current = time;

                const targetVel = getVelocity();
                const ease = 1 - Math.exp(-delta / 0.25);
                velocityRef.current += (targetVel - velocityRef.current) * ease;

                // Get the width of one set of logos
                const firstChild = track.firstElementChild;
                const trackSize = firstChild ? firstChild.offsetWidth : 0;

                if (trackSize > 0) {
                    offsetRef.current += velocityRef.current * delta;
                    offsetRef.current =
                        ((offsetRef.current % trackSize) + trackSize) %
                        trackSize;

                    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
                }

                rafRef.current = requestAnimationFrame(animate);
            };

            rafRef.current = requestAnimationFrame(animate);
            return () => {
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                lastTimeRef.current = null;
            };
        }, [isHovered, speed, direction]);

        const renderLogo = (logo, idx) => {
            const content = logo.src ? (
                <img
                    src={logo.src}
                    alt={logo.alt || ''}
                    className={`block object-contain select-none ${
                        scaleOnHover
                            ? 'transition-transform duration-300 hover:scale-110'
                            : ''
                    }`}
                    style={{ height: logoSize, width: 'auto' }}
                    draggable={false}
                />
            ) : (
                <div
                    className={
                        scaleOnHover
                            ? 'transition-transform duration-300 hover:scale-110'
                            : ''
                    }
                >
                    {logo.node}
                </div>
            );

            const item = logo.href ? (
                <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center opacity-100 hover:opacity-70 transition-opacity"
                >
                    {content}
                </a>
            ) : (
                content
            );

            return (
                <div
                    key={idx}
                    className="flex-shrink-0"
                    style={{ marginRight: gap }}
                >
                    {item}
                </div>
            );
        };

        return (
            <div
                ref={containerRef}
                className={`relative ${className}`}
                style={{
                    width,
                    height,
                    overflow: 'hidden',
                    position: 'relative',
                    ...style,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {fadeOut && (
                    <>
                        <div
                            className="absolute top-0 left-0 bottom-0 z-10 pointer-events-none"
                            style={{
                                width: 60,
                                background: `linear-gradient(to right, ${
                                    fadeColor || ''
                                } 0%, transparent 100%)`,
                            }}
                        />
                        <div
                            className="absolute top-0 right-0 bottom-0 z-10 pointer-events-none"
                            style={{
                                width: 60,
                                background: `linear-gradient(to left, ${
                                    fadeColor || ''
                                } 0%, transparent 100%)`,
                            }}
                        />
                    </>
                )}

                <div
                    ref={trackRef}
                    className="flex items-center"
                    style={{
                        width: 'max-content',
                        willChange: 'transform',
                    }}
                >
                    <div className="flex items-center">
                        {logos.map((logo, i) => renderLogo(logo, `a-${i}`))}
                    </div>
                    <div className="flex items-center">
                        {logos.map((logo, i) => renderLogo(logo, `b-${i}`))}
                    </div>
                </div>
            </div>
        );
    }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
