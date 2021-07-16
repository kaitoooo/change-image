import { gsap } from 'gsap';

export default class changeImg {
    constructor() {
        this.addClass = 'is-active';
        this.targetItem01 = document.querySelector('[data-kv="item01"]');
        this.targetItem02 = document.querySelector('[data-kv="item02"]');
        this.targetItem03 = document.querySelector('[data-kv="item03"]');

        this.init();
    }
    init() {
        gsap.config({
            force3D: true,
        });
        this.targetItem01.addEventListener('click', () => {
            this.animationItem01();
        });
        this.targetItem02.addEventListener('click', () => {
            this.animationItem02();
        });
        this.targetItem03.addEventListener('click', () => {
            this.animationItem03();
        });
    }
    animationItem01(){
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(
            this.targetItem01,
            {
                duration: 0.45,
                opacity: 0,
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.45,
                x: '-40%',
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.45,
                rotate: '-20deg',
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.4,
                rotate: 0,
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.4,
                left: '25%',
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0,
                pointerEvents: 'inherit',
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.1,
                visibility: 'hidden',
            }
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.1,
                x: '40%',
            }
        );
    }
    animationItem02(){
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(
            this.targetItem02,
            {
                duration: 0.45,
                opacity: 0,
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.45,
                x: '-40%',
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.45,
                rotate: '-20deg',
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.1,
                visibility: 'hidden',
            }
        );
        tl.to(
            this.targetItem03,
            {
                duration: 0.4,
                rotate: 0,
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem03,
            {
                duration: 0.4,
                left: '25%',
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem03,
            {
                duration: 0,
                pointerEvents: 'inherit',
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.1,
                visibility: 'hidden',
            }
        );
    }
    animationItem03(){
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(
            this.targetItem03,
            {
                duration: 0.3,
                rotate: '-10deg',
            }
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.1,
                visibility: 'visible',
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.5,
                opacity: 1,
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.5,
                rotate: '10deg',
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem02,
            {
                duration: 0.5,
                x: 0,
            },
            'simultaneous'
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.1,
                visibility: 'visible',
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.5,
                opacity: 1,
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.5,
                rotate: 0,
            },
            'simultaneous2'
        );
        tl.to(
            this.targetItem01,
            {
                duration: 0.5,
                x: 0,
            },
            'simultaneous2'
        );
    }
}
