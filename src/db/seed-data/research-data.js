const nextId = require('../../utils/nextId')

module.exports = [
  {
    research_id: 0,
    astrophysics_description:
      'Further findings in the field of astrophysics allow for the construction of laboratories that can be fitted on more and more ships. This makes long expeditions far into unexplored areas of space possible. In addition these advancements can be used to further colonise the universe. For every two levels of this technology an additional planet can be made usable.',
    astrophysics_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        max_planets: 1,
        max_expeditions: 0,
        positions: 'N/A',
      },
      1: {
        level: 1,
        metal: 4000,
        crystal: 8000,
        deuterium: 4000,
        max_planets: 2,
        max_expeditions: 1,
        positions: '4 - 12',
      },
      2: {
        level: 2,
        metal: 7000,
        crystal: 14000,
        deuterium: 7000,
        max_planets: 2,
        max_expeditions: 1,
        positions: '4 - 12',
      },
      3: {
        level: 3,
        metal: 12300,
        crystal: 24500,
        deuterium: 12300,
        max_planets: 3,
        max_expeditions: 1,
        positions: '4 - 12',
      },
      4: {
        level: 4,
        metal: 21400,
        crystal: 42900,
        deuterium: 21400,
        max_planets: 1,
        max_expeditions: 2,
        positions: '3 - 13',
      },
      5: {
        level: 5,
        metal: 37500,
        crystal: 75000,
        deuterium: 37500,
        max_planets: 1,
        max_expeditions: 2,
        positions: '3 - 13',
      },
      6: {
        level: 6,
        metal: 65700,
        crystal: 131300,
        deuterium: 65700,
        max_planets: 1,
        max_expeditions: 2,
        positions: '2 - 14',
      },
      7: {
        level: 7,
        metal: 114900,
        crystal: 229800,
        deuterium: 114900,
        max_planets: 1,
        max_expeditions: 2,
        positions: '2 - 14',
      },
      8: {
        level: 8,
        metal: 201100,
        crystal: 402100,
        deuterium: 201100,
        max_planets: 1,
        max_expeditions: 2,
        positions: '1 - 15',
      },
      9: {
        level: 9,
        metal: 351900,
        crystal: 703700,
        deuterium: 351900,
        max_planets: 1,
        max_expeditions: 3,
        positions: '1 - 15',
      },
      10: {
        level: 10,
        metal: 615700,
        crystal: 1231500,
        deuterium: 615700,
        max_planets: 1,
        max_expeditions: 3,
        positions: '1 - 15',
      },
    },
    computer_tech_description: `Once launched on any mission, fleets are controlled primarily by a series of computers located on the originating planet. These massive computers calculate the exact time of arrival, controls course corrections as needed, calculates trajectories, and regulates flight speeds. With each level researched, the flight computer is upgraded to allow an additional slot to be launched. Computer technology should be continuously developed throughout the building of your empire.`,
    computer_tech_costs_per_upgrade: {
      0: {
        level: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        crystal: 400,
        deuterium: 600,
      },
    },
    espionage_tech_description: `Espionage Technology is, in the first instance, an advancement of sensor technology. The more advanced this technology is, the more information the user receives about activities in his environment. The differences between your own spy level and opposing spy levels is crucial for probes. The more advanced your own espionage technology is, the more information the report can gather and the smaller the chance is that your espionage activities are discovered. The more probes that you send on one mission, the more details they can gather from the target planet. But at the same time it also increases the chance of discovery. Espionage technology also improves the chance of locating foreign fleets. The espionage level is vital in determining this. From level 2 onwards, the exact total number of attacking ships is displayed as well as the normal attack notification. And from level 4 onwards, the type of attacking ships as well as the total number is shown and from level 8 onwards the exact number of different ship types is shown. This technology is indispensable for an upcoming attack, as it informs you whether the victim fleet has defence available or not. That is why this technology should be researched very early on.`,
    espionage_tech_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        metal: 200,
        crystal: 1000,
        deuterium: 200,
      },
    },
    gravitation_tech_description:
      'A graviton is an elementary particle that is massless and has no cargo. It determines the gravitational power. By firing a concentrated load of gravitons, an artificial gravitational field can be constructed. Not unlike a black hole, it draws mass into itself. Thus it can destroy ships and even entire moons. To produce a sufficient amount of gravitons, huge amounts of energy are required. Graviton Research is required to construct a destructive Deathstar.',
    gravitation_tech_costs_per_upgrade: {
      0: {
        level: 0,
        energy: 0,
      },
      1: {
        level: 1,
        energy: 300000,
      },
    },
    intergalactic_research_network_description: `This is your deep space network to communicate research results to your colonies. With the IRN, faster research times can be achieved by linking the highest level research labs equal to the level of the IRN developed. In order to function, each colony must be able to conduct the research independently.`,
    intergalactic_research_network_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 400000,
        crystal: 800000,
        deuterium: 400000,
      },
      1: {
        level: 1,
        metal: 800000,
        crystal: 1600000,
        deuterium: 800000,
      },
    },
    energy_tech_description:
      'As various fields of research advanced, it was discovered that the current technology of energy distribution was not sufficient enough to begin certain specialized research. With each upgrade of your Energy Technology, new research can be conducted which unlocks development of more sophisticated ships and defences.',
    energy_tech_costs_per_upgrade: {
      0: {
        level: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        crystal: 800,
        deuterium: 400,
      },
    },
    hyperspace_tech_description: `In theory, the idea of hyperspace travel relies on the existence of a separate and adjacent dimension. When activated, a hyperspace drive shunts the starship into this other dimension, where it can cover vast distances in an amount of time greatly reduced from the time it would take in "normal" space. Once it reaches the point in hyperspace that corresponds to its destination in real space, it re-emerges. Once a sufficient level of Hyperspace Technology is researched, the Hyperspace Drive is no longer just a theory. Each improvement to this drive increases the load capacity of your ships by 5% of the base value.`,
    hyperspace_tech_costs_per_upgrade: {
      0: {
        level: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        crystal: 4000,
        deuterium: 2000,
      },
    },
    ion_tech_description: `Ions can be concentrated and accelerated into a deadly beam. These beams can then inflict enormous damage. Our scientists have also developed a technique that will clearly reduce the deconstruction costs for buildings and systems. For each research level, the deconstruction costs will sink by 4%.`,
    ion_tech_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
      },
      1: {
        level: 1,
        metal: 1000,
        crystal: 300,
        deuterium: 100,
      },
    },
    laser_tech_description:
      'Lasers (light amplification by stimulated emission of radiation) produce an intense, energy rich emission of coherent light. These devices can be used in all sorts of areas, from optical computers to heavy laser weapons, which effortlessly cut through armour technology. The laser technology provides an important basis for research of other weapon technologies.',
    laser_tech_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
      },
      1: {
        level: 1,
        metal: 200,
        crystal: 100,
      },
    },
    plasma_tech_description: `A further development of ion technology that doesn't speed up ions but high-energy plasma instead, which can then inflict devastating damage on impact with an object. Our scientists have also found a way to noticeably improve the mining of metal and crystal using this technology. Metal production increases by 1%, crystal production by 0.66% and deuterium production by 0.33% per construction level of the plasma technology.`,
    plasma_tech_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        metal_multiplier: 0,
        crystal_multiplier: 0,
        deuterium_multiplier: 0,
      },
      1: {
        level: 1,
        metal: 2000,
        crystal: 4000,
        deuterium: 1000,
        metal_multiplier: 1.01,
        crystal_multiplier: 1.0066,
        deuterium_multiplier: 1.0033,
      },
      2: {
        level: 2,
        metal: 4000,
        crystal: 8000,
        deuterium: 2000,
        metal_multiplier: 1.02,
        crystal_multiplier: 1.0132,
        deuterium_multiplier: 1.0066,
      },
      3: {
        level: 3,
        metal: 8000,
        crystal: 16000,
        deuterium: 4000,
        metal_multiplier: 1.03,
        crystal_multiplier: 1.0198,
        deuterium_multiplier: 1.0099,
      },
      4: {
        level: 4,
        metal: 16000,
        crystal: 32000,
        deuterium: 8000,
        metal_multiplier: 1.04,
        crystal_multiplier: 1.0264,
        deuterium_multiplier: 1.0132,
      },
      5: {
        level: 5,
        metal: 32000,
        crystal: 64000,
        deuterium: 16000,
        metal_multiplier: 1.05,
        crystal_multiplier: 1.033,
        deuterium_multiplier: 1.0165,
      },
      6: {
        level: 6,
        metal: 64000,
        crystal: 128000,
        deuterium: 32000,
        metal_multiplier: 1.06,
        crystal_multiplier: 1.0396,
        deuterium_multiplier: 1.0198,
      },
      7: {
        level: 7,
        metal: 128000,
        crystal: 256000,
        deuterium: 64000,
        metal_multiplier: 1.07,
        crystal_multiplier: 1.0462,
        deuterium_multiplier: 1.0231,
      },
      8: {
        level: 8,
        metal: 256000,
        crystal: 512000,
        deuterium: 128000,
        metal_multiplier: 1.08,
        crystal_multiplier: 1.0594,
        deuterium_multiplier: 1.0264,
      },
      9: {
        level: 9,
        metal: 512000,
        crystal: 1024000,
        deuterium: 256000,
        metal_multiplier: 1.09,
        crystal_multiplier: 1.0594,
        deuterium_multiplier: 1.0297,
      },
      10: {
        level: 10,
        metal: 1024000,
        crystal: 2048000,
        deuterium: 512000,
        metal_multiplier: 1.1,
        crystal_multiplier: 1.066,
        deuterium_multiplier: 1.033,
      },
    },
    armour_tech_description:
      'The environment of deep space is harsh. Pilots and crew on various missions not only faced intense solar radiation, they also faced the prospect of being hit by space debris, or destroyed by enemy fire in an attack. With the discovery of an aluminum-lithium titanium carbide alloy, which was found to be both light weight and durable, this afforded the crew a certain degree of protection. With each level of Armour Technology developed, a higher quality alloy is produced, which increases the armours strength by 10%.',
    armour_tech_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        percent_bonus: 0,
      },
      1: {
        level: 1,
        metal: 1000,
        percent_bonus: 10,
      },
    },
    shielding_tech_description: `With the invention of the magnetosphere generator, scientists learned that an artificial shield could be produced to protect the crew in space ships not only from the harsh solar radiation environment in deep space, but also provide protection from enemy fire during an attack. Once scientists finally perfected the technology, a magnetosphere generator was installed on all ships and defence systems. As the technology is advanced to each level, the magnetosphere generator is upgraded which provides an additional 10% strength to the shields base value.`,
    shielding_tech_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        percent_bonus: 0,
      },
      1: {
        level: 1,
        metal: 200,
        crystal: 600,
        percent_bonus: 10,
      },
    },
    weapons_tech_description:
      'Weapons Technology is a key research technology and is critical to your survival against enemy Empires. With each level of Weapons Technology researched, the weapons systems on ships and your defence mechanisms become increasingly more efficient. Each level increases the base strength of your weapons by 10% of the base value.',
    weapons_tech_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        percent_bonus: 0,
      },
      1: {
        level: 1,
        metal: 800,
        crystal: 200,
        percent_bonus: 10,
      },
    },
    combustion_drive_description: `The Combustion Drive is the oldest of technologies, but is still in use. With the Combustion Drive, exhaust is formed from propellants carried within the ship prior to use. In a closed chamber, the pressures are equal in each direction and no acceleration occurs. If an opening is provided at the bottom of the chamber then the pressure is no longer opposed on that side. The remaining pressure gives a resultant thrust in the side opposite the opening, which propels the ship forward by expelling the exhaust rearwards at extreme high speed. With each level of the Combustion Drive developed, the speed of small and large cargo ships, light fighters, recyclers, and espionage probes are increased by 10%.`,
    combustion_drive_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        deuterium: 0,
        speed: 0,
      },
      1: {
        level: 1,
        metal: 400,
        deuterium: 600,
        speed: 1.1,
      },
    },
    hyperspace_drive_description:
      'In the immediate vicinity of the ship, the space is warped so that long distances can be covered very quickly. The more the Hyperspace Drive is developed, the stronger the warped nature of the space, whereby the speed of the ships equipped with it (Battlecruisers, Battleships, Destroyers, Deathstars, Pathfinders and Reapers) increase by 30% per level. Additionally, the bomber is built with a Hyperspace Drive as soon as research reaches level 8. As soon as Hyperspace Drive research reaches level 15, the Recycler is refitted with a Hyperspace Drive.',
    hyperspace_drive_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        speed: 0,
      },
      1: {
        level: 1,
        metal: 10000,
        crystal: 20000,
        deuterium: 6000,
        speed: 1.3,
      },
    },
    impulse_drive_description: `The impulse drive is based on the recoil principle, by which the stimulated emission of radiation is mainly produced as a waste product from the core fusion to gain energy. Additionally, other masses can be injected. With each level of the Impulse Drive developed, the speed of bombers, cruisers, heavy fighters, and colony ships are increased by 20% of the base value. Additionally, the small transporters are fitted with impulse drives as soon as their research level reaches 5. As soon as Impulse Drive research has reached level 17, Recyclers are refitted with Impulse Drives. Interplanetary missiles also travel farther with each level.`,
    impulse_drive_costs_per_upgrade: {
      0: {
        level: 0,
        metal: 0,
        crystal: 0,
        deuterium: 0,
        speed: 0,
      },
      1: {
        level: 1,
        metal: 2000,
        crystal: 4000,
        deuterium: 600,
        speed: 1.2,
      },
    },
  },
]