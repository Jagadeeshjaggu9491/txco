'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/blog-video-section.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const VIDEO_SRC = '/images/test-video.webm';

export default function BlogVideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const stageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullscreen = () => {
    if (stageRef.current) {
      if (!document.fullscreenElement) {
        if (stageRef.current.requestFullscreen) {
          stageRef.current.requestFullscreen();
        } else if (stageRef.current.webkitRequestFullscreen) {
          stageRef.current.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };

  return (
    <section ref={containerRef} className="blog-video-section">
      <div className="blog-video-container">
        {/* Header Text Above Video */}
        <div className="blog-video-header">

          <h2 className="blog-video-title">
            Engineering Precision & <span className="blog-video-title-highlight">Sealing Integrity</span>
          </h2>

          <p className="blog-video-subtitle">
            Explore advanced metallic sealing profiles, CNC machining, and rigorous testing engineered to withstand the world's most extreme operating environments.
          </p>
        </div>

        {/* Video Stage Frame */}
        <div ref={stageRef} className="blog-video-stage">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onClick={togglePlay}
            className="blog-video-element"
          >
            <source src={VIDEO_SRC} type="video/webm" />
          </video>

          {/* Bottom Gradient for Controls Legibility */}
          <div className="blog-video-bottom-gradient" aria-hidden="true" />

          {/* Centered Play Button when paused */}
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlay}
              className="blog-video-center-play-btn"
              aria-label="Play video"
              title="Play Video"
            >
              <Play size={30} fill="#ffffff" style={{ marginLeft: '4px' }} />
            </button>
          )}

          {/* Floating Controls Bar at Bottom */}
          <div className="blog-video-controls-bar">
            <div className="blog-video-controls-left">
              <button
                type="button"
                onClick={togglePlay}
                className="blog-video-control-btn"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} fill="#ffffff" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                type="button"
                onClick={toggleSound}
                className="blog-video-control-btn"
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isMuted ? 'Muted' : 'Sound On'}</span>
              </button>
            </div>

            <div className="blog-video-controls-right">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="blog-video-control-btn"
                aria-label="Toggle fullscreen"
                title="Fullscreen"
              >
                <Maximize2 size={15} />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
