// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const planetLinks = document.querySelectorAll('nav a');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const planetImage = document.getElementById('planet-image');
    const planetName = document.getElementById('planet-name');
    const planetDescription = document.getElementById('planet-description');
    const rotationTime = document.getElementById('rotation-time');
    const revolutionTime = document.getElementById('revolution-time');
    const radius = document.getElementById('radius');
    const temperature = document.getElementById('temperature');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        const navList = document.querySelector('nav ul');
        navList.classList.toggle('active');
        this.setAttribute('aria-expanded', navList.classList.contains('active'));
    });
    
    // Complete planet data for all 8 planets
    const planets = {
        mercury: {
            name: "MERCURY",
            overview: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
            structure: "Mercury's internal structure includes a crust, mantle, and core. The core is thought to be partially molten, accounting for about 42% of the planet's volume.",
            geology: "Mercury's surface is heavily cratered and similar in appearance to the Moon, indicating that it has been geologically inactive for billions of years.",
            rotation: "58.6 DAYS",
            revolution: "87.97 DAYS",
            radius: "2,439.7 KM",
            temp: "430°C",
            color: "var(--mercury-color)",
            image: "assets/mercury.png"
        },
        venus: {
            name: "VENUS",
            overview: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. Venus orbits the Sun every 224.7 Earth days.",
            structure: "Venus has a thick silicate mantle around an iron core. It has a carbon dioxide atmosphere and no evidence of plate tectonics.",
            geology: "Venus has a surface covered by volcanic plains and large shield volcanoes. It has few impact craters, suggesting its surface is relatively young.",
            rotation: "243 DAYS",
            revolution: "224.7 DAYS",
            radius: "6,051.8 KM",
            temp: "471°C",
            color: "var(--venus-color)",
            image: "assets/venus.png"
        },
        earth: {
            name: "EARTH",
            overview: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land with the remaining 71% covered with water.",
            structure: "Earth's interior is divided into layers: a solid crust, a viscous mantle, a liquid outer core, and a solid inner core. The outer core generates the magnetic field.",
            geology: "Earth's surface is constantly changing due to plate tectonics and erosion. It has a variety of landscapes including mountains, deserts, plains, and more.",
            rotation: "0.99 DAYS",
            revolution: "365.26 DAYS",
            radius: "6,371 KM",
            temp: "16°C",
            color: "var(--earth-color)",
            image: "assets/earth.png"
        },
        mars: {
            name: "MARS",
            overview: "Mars is the fourth planet from the Sun and the second-smallest planet. Named after the Roman god of war, it's often called the 'Red Planet' due to iron oxide on its surface.",
            structure: "Mars has a core, mantle, and crust. The core is likely composed of iron, nickel, and sulfur. The mantle is silicate and the crust is a volcanic basalt.",
            geology: "Mars has the largest volcano and canyon in the solar system. Its surface shows evidence of ancient rivers, lakes and possibly oceans.",
            rotation: "1.03 DAYS",
            revolution: "1.88 YEARS",
            radius: "3,389.5 KM",
            temp: "-28°C",
            color: "var(--mars-color)",
            image: "assets/mars.png"
        },
        jupiter: {
            name: "JUPITER",
            overview: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It's a gas giant with a mass one-thousandth that of the Sun.",
            structure: "Jupiter has a dense core of uncertain composition, surrounded by a layer of metallic hydrogen and then the outer layer of molecular hydrogen.",
            geology: "As a gas giant, Jupiter has no solid surface. Its atmosphere features colorful bands and the Great Red Spot, a giant storm.",
            rotation: "0.41 DAYS",
            revolution: "11.86 YEARS",
            radius: "69,911 KM",
            temp: "-108°C",
            color: "var(--jupiter-color)",
            image: "assets/jupiter.png"
        },
        saturn: {
            name: "SATURN",
            overview: "Saturn is the sixth planet from the Sun and the second-largest. It's known for its prominent ring system composed mostly of ice particles.",
            structure: "Saturn likely has a rocky core surrounded by metallic hydrogen and liquid hydrogen/helium. The outer atmosphere contains visible ammonia crystals.",
            geology: "Saturn's atmosphere has pale gold bands similar to Jupiter's but fainter. The planet's most famous feature is its ring system.",
            rotation: "0.45 DAYS",
            revolution: "29.46 YEARS",
            radius: "58,232 KM",
            temp: "-138°C",
            color: "var(--saturn-color)",
            image: "assets/saturn.png"
        },
        uranus: {
            name: "URANUS",
            overview: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest mass. It's unique for rotating on its side.",
            structure: "Uranus has a small rocky core, a mantle of water, ammonia and methane ices, and an atmosphere of hydrogen and helium with trace hydrocarbons.",
            geology: "Uranus appears as a featureless blue-green disk. It has a complex layered cloud structure and the coldest atmosphere in the Solar System.",
            rotation: "0.72 DAYS",
            revolution: "84.01 YEARS",
            radius: "25,362 KM",
            temp: "-195°C",
            color: "var(--uranus-color)",
            image: "assets/uranus.png"
        },
        neptune: {
            name: "NEPTUNE",
            overview: "Neptune is the eighth and most distant planet from the Sun. It's the fourth-largest by diameter and third-most massive. It's 17 times Earth's mass.",
            structure: "Neptune's interior is similar to Uranus - a rocky core, icy mantle and atmosphere. It has the strongest winds of any planet in the Solar System.",
            geology: "Neptune appears blue due to methane in its atmosphere. It has active weather patterns including the Great Dark Spot storm system.",
            rotation: "0.67 DAYS",
            revolution: "164.8 YEARS",
            radius: "24,622 KM",
            temp: "-201°C",
            color: "var(--neptune-color)",
            image: "assets/neptune.png"
        }
    };
    
    // Set active planet
    function setActivePlanet(planet) {
        // Update active link
        planetLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.planet === planet) {
                link.classList.add('active');
                // Update active indicator color
                document.documentElement.style.setProperty('--active-color', planets[planet].color);
            }
        });
        
        // Update planet info
        const planetData = planets[planet];
        planetName.textContent = planetData.name;
        planetDescription.textContent = planetData.overview;
        rotationTime.textContent = planetData.rotation;
        revolutionTime.textContent = planetData.revolution;
        radius.textContent = planetData.radius;
        temperature.textContent = planetData.temp;
        planetImage.src = planetData.image;
        planetImage.alt = planetData.name;
        
        // Reset tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabButtons[0].classList.add('active');
    }
    
    // Planet link click handler
    planetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const planet = this.dataset.planet;
            setActivePlanet(planet);
            
            // Close mobile menu if open
            const navList = document.querySelector('nav ul');
            navList.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Tab click handler
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            const activePlanet = document.querySelector('nav a.active').dataset.planet;
            
            // Update active tab
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update content based on tab
            if (tab === 'overview') {
                planetDescription.textContent = planets[activePlanet].overview;
            } else if (tab === 'structure') {
                planetDescription.textContent = planets[activePlanet].structure;
            } else if (tab === 'geology') {
                planetDescription.textContent = planets[activePlanet].geology;
            }
        });
    });
    
    // Initialize with Mercury
    setActivePlanet('mercury');

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 640) {
            const navList = document.querySelector('nav ul');
            navList.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});