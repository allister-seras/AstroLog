import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle(){
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={
                {"fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": '#edd8a5'
                    },
                    "shape": {
                        "type": "star",
                        "options": {
                            "sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": .5,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": ["repulse"]
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 1,
                            "speed": 2
                        },
                        "repulse": {
                            "distance": 100
                        },
                        "push": {
                            "particles_nb": 3
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "background": {
                    "color": "#1c183c",
                    "image": "img/github.svg",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }}
            }
        />
    )
}

export default Particle