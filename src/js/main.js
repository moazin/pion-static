import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

var MODULE_KEYS = ['Name of Module', 'Heads', 'Contact', 'Minimun Members', 'Maximum Members', 'Module Fee'];
var MODULES_DATA = {
    'module-01': {
        'Image Name': '25.jpg',
        'Contact': 3332873132,
        'Heads': 'Arslan Khalid',
        'Maximum Members': 3,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Egg Drop',
        'category': 'Technical',
        'Description': '<p>The object of the competition is to design a device that will protect a fresh egg from breaking when it is dropped from a height of two-story building; eggs will be provided at the event. Entrants will compete to design a device with the lightest weight, the fewest number of parts, and the most accurate landing on the Drop Zone target.</p><p>Any egg drop that results in the egg breaking receives a score of zero. All devices will be dropped from the same height. In the event of a tie, the tying entrants will continue to have their devices dropped until one device achieves a clearly winning score grade. After the drop, the judge will remove the device from the target and the contestant, or their designee, will remove the egg from the device for inspection by the judge. No repairs to the devices will be allowed between drops. After check-in, each device entered will be weighed without the egg provided to each contestant. No changes or modifications to the device will be allowed once it has been weighed with the egg. .</p><p>The number of parts used for each device will be counted. Each individual piece will count as one part. For example, if the egg is bamboo sticks taped together the device will have 7parts (6 parts sticks and 1 part tape) Eggs are not to be treated in any way (i.e.: coated, nail polish, lacquer, etc.) There will be only one release unless the judge declares a problem with the release. The Drop Zone will be comprised of three concentric rings; two, three, and four feet in diameter. A land entirely within the innermost ring will be given 3 points, in the second ring, 2 points, in the third ring, 1 point and outside all of the rings will be 0 points. </p><p>Winners will be decided on the basis of the no. of drops before egg breakage, minimum no. of parts and landing location of the egg. </p><h3>Rules</h3><ol><li> Each team should consist of 2-3 members. </li><li>The rules and regulations are NOT rigid and any amendment(s) shall be imposed without any prior notice.</li><li> The decision by the panel of judges shall be considered final. </li><li> Only 30 minutes will be given to design a device for egg drop challenge. </li></ol>',
        // 'rules': []
    },
    'module-02': {
        'Image Name': '28.jpg',
        'Contact': 3067100039,
        'Heads': 'Hammad Ali',
        'Maximum Members': 2,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'Bridge Building',
        'category': 'Technical',
        'Description': '<h3>Rules</h3><ol><li> The minimum height of the bridge should be 20 cm. </li> <li> The minimum Length of the base should be 33 cm. </li><li> The minimum Width of the bridge should be 10 cm. </li><li> The max mass of the bridge must be 3kg. </li><li> The Top of the bridge must be covered/filled in order to test the bridge when theload is applied. </li> <li> A time of 1 hour 25 min will be given to each of the team for the completion of their design.</li> <li> Use of calculators is allowed but mobile is not allowed to be used as acalculator. </li><li>Use of any electronic device other than calculator is prohibited. </li><li> Any helping material which could help in designing is not allowed during competition. </li></ol><h1>Material Constraints</h1><ul><li>Popsicle sticks and Glue will be provided on the spot. The Popsicle sticks can be cut or trimmed to any shape or size. A cutter or a scissor will be provided to each team for this purpose. </li><li>Adhesive can only be used to join Popsicle sticks together; however, adhesives cannot be applied on the free surface of a member made of Popsicle sticks to increase its strength </li><li>The team will be disqualified if found using any other material other than those mentioned in any part of the structure. </li></ul><h1>Testing and Judging Criteria</h1><ul><li>The load will be applied at the top centre of the structure. </li><li>The load will be incremented after every 10 Sec till the structure fails. </li><li>The bridge with the highest load to weight ratio will be declared awinner. </li></ul><h1>Definition of failure</h1>The structure is considered failed when any of the following happens: <ul><li>The structure fails to satisfy any of the constraints specified above. </li><li>Any member or joint of the structure fails. </li></ul><h1>Guidelines</h1>As a student, you must know that maximum stress/load is born by the triangle truss network. So try to use trusses and to avoid simple shapes if you want to achieve high load stability.',
        // 'rules': []
    },
    'module-03': {
        'Image Name': '29.jpg',
        'Contact': 3365346110,
        'Heads': 'Anns Rashid',
        'Maximum Members': 3,
        'Minimun Members': 2,
        'Module Fee': 600,
        'Name of Module': 'RC Car',
        'category': 'Technical',
        'Description': '<h3>Rules</h3><ol><li> A team should consist of 2-3 members. </li><li> Each team will be given two 1.5 volt batteries, 2 motors and thebasic structure of car, cardboard & basic material for making circuitry like buttons wires tape etc.</li><li>Each team will have to complete a track within theminimum time which will be specified at the time. Track will be displayed only before the event. </li><li>The rules and regulations are NOT rigid and any amendment(s) shall be imposed without any prior notice.</li><li> The decision of the judges panel shall be considered final. </li><h3>Judging</h3><ul><li>How far does the car follow the defined path?</li><li>How much is your car aesthetically appealing?</li></ul>',
        // 'rules': []
    },
    'module-04': {
        'Image Name': '26.jpg',
        'Contact': 3444030033,
        'Heads': 'Faizan Ahmed',
        'Maximum Members': 5,
        'Minimun Members': 4,
        'Module Fee': 1500,
        'Name of Module': 'Gladiator',
        'category': 'Technical',
        'Description': '<h3>Rules </h3><ol><li>Each team should consist of four to five members.</li><li>The rules and regulations are NOT rigid and any amendment(s) shall be imposed without any prior notice. </li><li>The decision of the judges panel shall be considered final.The participants will be provided with the limited material to build a glider plane in 2 hours.</li><li>These gliders will then be tested. The glider plane that travels the farthest and spends thelongest time airborne will be the winner of the competition. The distance will be measuredfrom the point of lift-off and the time will be recorded between the lift-off and the landing. </li><li> Glider should be made with the material provided (no external material must be used). </li><li> Dimensional criteria (wingspan minimum 1.5ft). </li><li> A Short run-up or fast walk (within ten feet) as part of the launch is permitted. </li><li>Three trials per team are allowed (the best attempt counts).</li><li>Planes are not allowed to be remotely controlled. </li><li> There are no limitations with regards to the body style while throwing. </li><li> Each participant has a time slot of 1 minute to perform in front of the jury. </li><li> These rules are subject to change without any prior notice. </li><h3>Judgement Criteria</h3><ul><li>Distance Travel (40%)</li><li>Time of Flight (30%)</li><li>Aerodynamics (20%)</li><li>CG Balance (10%)</li><ul>',
        // 'rules': []
    },
    'module-05': {
        'Image Name': '31.jpg',
        'Contact': 3004282992,
        'Heads': 'Faizan Javed',
        'Maximum Members': 2,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'Hot Air Ballon',
        'category': 'Technical',
        'Description': '<h3>Rules </h3><ul><li> Maximum of two members per team are allowed. </li><li> Any team member found consulting or helping any, another person will be disqualified onthe spot. </li> <li>  These rules are subject to change without any prior notice. </li><li> The rules and regulations are NOT rigid and any amendment(s) shall be imposed without any prior notice. </li><li> The decision of the judges panel shall be considered final. </li><li> Only 30 minutes will be given to design a balloon. </li><h3>Objective</h3><p> Teams have to carefully select from the material and use it smartly to develop a hot air balloon able to carry the most amount of payload and remain airborne for the most time as well. The teams are required to make fly their designs by the end of 30-minute time limit. </p>',
        // 'rules': []
    },
    'module-06': {
        'Image Name': '27.jpg',
        'Contact': 3351761096,
        'Heads': 'Usman Khalid',
        'Maximum Members': 2,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'Cadding',
        'category': 'Technical',
        'Description': '<h3>Rules</h3><ol><li> Participants will be given the orthogonal views with full dimensions of different parts and of complete drawing. </li><li> They will have to assemble the parts which they will model. </li><li> Specific time will be given for the tasks. </li><li> Maximum of 2 members per team are allowed. </li><li>Any team member found consulting or helping any other person will be disqualified on the spot. </li><li> These rules are subject to change without any prior notice. </li><li> The rules and regulations are NOT rigid and any amendment(s) shall be imposed without any prior notice. </li><li> The decision of the judges panel shall be considered final. </li><h3>Judgment Criterion</h3><ul><li>Time taken to complete the required </li><li>Will be selected on the basis of points.</li></ul>',
        // 'rules': []
    },
    'module-07': {
        'Image Name': '53.jpg',
        'Contact': 3345597828,
        'Heads': 'Abdur Rehman Shamsi',
        'Maximum Members': 4,
        'Minimun Members': 1,
        'Module Fee': 1000,
        'Name of Module': 'PUBG Mobile',
        'category': 'E-Sports',
        'Description': '<h3>Rules</h3><ul><li>Emulator are not allowed. Participants have to play the event on their own Mobile Devices, iPads or Tablets. </li><li>All the participants should arrive 30 minutes before the start of the game. </li><li>Each Map will be played in every Round. </li><li>Top 10 teams will play the final round and winner will be selected on the basis of points. </li><li>Chicken Dinner carry 50 points. Each kill carries 10 points. </li><li>This will be Squad event and if the members of a squad are late there will be no relaxation for them. </li><li>There should be at least 1 member or 4 members in a squad and if a team is not present at the start of the game, they will be charged plenty according to the scoring criteria. </li><li>Participants should not argue with the scoring criteria. </li></ul>',
        // 'rules': []
    },
    'module-08': {
        'Image Name': '45.jpg',
        'Contact': 3346998295,
        'Heads': 'M Yasir Aziz',
        'Maximum Members': 5,
        'Minimun Members': 5,
        'Module Fee': 1500,
        'Name of Module': 'Call of Duty 4',
        'category': 'E-Sports',
        'Description': '<h3>Rules</h3><ul><li>The game will be played on ProMod live version 2.20 (No perks available). </li><li>There will be 5 maps (Crash, Crossfire, Backlot, Strike, City streets) in the game and Selection of map will be done by coin toss. </li><li> The captain of team who won the toss will eliminate first map which his team does not want to play, then the losing captain will eliminate one map and then again the captain who won the toss will eliminate one more map from the remaining maps, finally the losing captain will eliminate one map, the map that remains after elimination is to be played between two teams. </li><li>The game type will be Search and Destroy(S&D) and match will be mr_12. </li><li> The team who won the first 13 rounds will win the match. </li><li> There will be knife round which will decide which team is going to be in Attack or Defense (winning team will decide their side either Attack or Defense). </li><li> Final will be played on 3 maps. Maps selections will be on coin toss. </li><li>  (The captain of team who won the toss will eliminate first map which his team does not want to play, then the losing captain will eliminate one map, the remaining three maps will then be played one by one with mr_12 race to 13 round win). </li><li> Each team will consist of 5 players. </li><li> Each team must present 1 representative (known as captain). He is responsible for his team and all communication with the Referees. </li><li> Each team member must use the exact same team abbreviation (i.e. University name). </li><li> Each person attending the tournament must have read and accepted the rules and regulations. Ignoring a rule and forwarding a complaint is not an option. </li><li> Host Team reserves the right to modify the rules and regulations from time to time without notice, to protect the integrity and smooth flow of the Tournament. </li><li> The standard mouse and keyboard will be provided, or participants can bring their own equipment. </li><li> Complaints can only be filed by the team leader (i.e. a captain that represents the team). </li><li> If a captain disagrees to any rules, he/she can express his/her protest to a Match Referee before the completion of a match. </li><li> If a re-match is decided by the event manager, the team that does not follow this decision will be subject to disqualification. </li><li> Decision of match referee will be final and cannot be challenged. </li><li> Use of Binds is not allowed. However, film tweaks are allowed. </li><li> Macros, Triple click or no recoil feature is not allowed for mouse (i.e. A4tech BLOODY mouse). </li><li> You are allowed to bring your own CFG file (configuration file), which will be submitted to the Admin at the start of event, who will check and place the CFGs. You are not allowed to place it by your own. </li> <li> Your team will be disqualified if a mixer (Invalid Player) is found in the team. </li><li> Substitutions are acceptable before or after a match is complete and not during the match. A Substitute player must not be playing or played for any other team in the tournament. </li><li> If Disconnection Occurs during a Match due to a server, network or electrical failure occurs the match is to be resumed and each team keeps the amount of points they had won. </li><li> A failure happening during the first-round leads to restart of the entire match. </li></ul>',
        // 'rules': []
    },
    'module-09': {
        'Image Name': '44.jpg',
        'Contact': 3355881332,
        'Heads': 'Furqan Shaikh',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'FIFA 19',
        'category': 'E-Sports',
        'Description': '<h3>Rules</h3><ul><li>Platform will be PlayStation 4.</li><li>Game will be FIFA 19.</li><li>Participants can bring their own Controllers. </li><li>1 team member. </li><li> Only registered participants will be allowed. </li><li> Tournament will be a Group and Knockout based tournament.</li><li> Platform will be PlayStation 4.</li><li>Game will be FIFA 19. </li><li>Participants can bring their own Controllers. </li><li>In-Game Rules: </li><li>Only Club teams are allowed. (No International or Classic Teams) </li><li>Live Form will be ON if available. </li><li>Half Length up till the Semi Finals will be 6 minutes. </li><li> “World Class Difficulty” will be in effect. Injuries, Offside, Bookings and Handballs will be ON. However: </li><li>Alternate or Classic Controls are allowed only. </li><li>Tactical Defending is allowed only. </li><li>Game speed will be Normal. </li><li>Stadium will be Neutral. </li><li>Conditions will be as follows: </li>Season: Spring</br>Time: 9:00 PM</br>Weather: Clear</br>Pitch Wear: Random</br><li>Camera angle will be default. </li><li>Only Pre-Loaded formations in the game can be used. </li><li>Tactics and Instructions can be given. However, an individual will have only 3 minutes before the match is started. </li><li>Only registered players will be allowed to play. </li><li>No re-entry. </li><li>No aggression towards your fellow opponent. </li><li>If any individual causes damage to the hardware, he/she shall be held accountable and shall have to pay for the damages. </li><li>Players are expected to arrive, 15 minutes before their match starts. </li><li>In case of any CONFLICT, decision of Organizers will be final. </li><li>Failing to adhere to the above-mentioned rules, an individual may be disqualified. </li></ul>',
        // 'rules': []
    },
    'module-10': {
        'Image Name': '43.jpg',
        'Contact': 3107459732,
        'Heads': 'Zain ul Hassan',
        'Maximum Members': 5,
        'Minimun Members': 5,
        'Module Fee': 1500,
        'Name of Module': 'Counter Strike 1.6',
        'category': 'E-Sports',
        'Description': '<h3>Rules</h3><strong>Game Format:</strong><ul><li>2 sides (Terrorist and Counter-Terrorist)</li><li>  Competition Method 5 vs 5 </li><li>  Total 10 players (5 on each side) </li><li>  Total 32 rounds will be played. The team who scored first 16 rounds will be the winner of the map. </li><li>  Buy time: 15seconds</li><li>  Start money: $800 </li><li>  Freeze time: 15seconds </li><li>  Map pool: (de_dust2, de_inferno, de_nuke, de_train) *The map pool may be changed prior to the tournament. Players will be informed of any such changes as soon as possible. </li><li>  Map time: One 1 minute 45 seconds on a map </li><strong>Side Selection: </strong><li>  A knife round will be played.  </li><li>  The winner team will choose the side (Counter-Terrorist or Terrorist) by typing in global in-game chat or tell the admin. (e.g. STAY or SWAP).  </li><li> After 16 rounds, the teams will switch the sides. </li></ul><strong>Winning Condition:</strong><p>Both teams will play the Map pool. The team with the most map winning will be selected.  </p><p>If map score ties (16-16), team will switch the sides and additional 6 rounds (3 on each sides) with $800 start money will be played. </p><p>If Map pool score ties (2-2), then 6 rounds (3 on each sides) with $800 start money will be played in ‘de_dust2’ with a knife round for side selection.</p><strong>Setup and Configuration:</strong><p>Non-standard game settings or third-party applications that affect game play are not permitted. Players found using either will be penalized at the administrators´ discretion.</p><strong>Tournament Guideline:</strong><p>Any disconnection issues that cannot be resolved by the players in the match must be brought to the attention of an admin immediately. Any use of game exploits, cheats, or any other play deemed “unfair” by an admin may result in disciplinary action up to and including disqualification from the tournament. Competitors are not allowed to use global in-game chat in an abusive, offensive, vulgar or spamming manner at any point during a match. This includes pre-match, intermission and post-match periods as well. When a match is live, only team captains are allowed to use global in-game messages between rounds or at half time, other players must use team-only in-game messages. Violators of these rules are subject to penalties at the administrators’ discretion, which may include player suspension(s) or forfeiture of the match</p>',
        // 'rules': []
    },
    'module-11': {
        'Image Name': '51.jpg',
        'Contact': 3335675137,
        'Heads': 'Wajih un Nabi',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'NFS Most Wanted 1.3',
        'category': 'E-Sports',
        'Description': '<h3>Rules and Discription</h3><strong> General </strong><ul><li>Competition Method: 1 vs. 1 </li><li> Game Type: Circuit </li><li> Host, client will be announced before the match or decided by coin toss. (Only for LAN Tournament) </li><li> Other controllers, Steering Wheel allowed</li><li> At the end of each match, players must maintain the final screens and receive confirmation from a referee. </li><li> Winning a race: The winner of a race is the first player to complete 5 laps of the circuit course and cross </li><li> the finish lines. </li><li> Graphic settings such as motion blur¡± can be set using external utilities. </li><li> The use of Porsche GT and BMW M3 are NOT allowed. </li><strong>Car Settings </strong><li>Visual Upgrade allowed. </li><li>Part, Performance (Pro, Super Pro, Ultimate) allowed, Junkman not allowed </li><li>Personal save files are NOT allowed. </li><li> Cars may be tuned before racing each course. </li><strong>Game Setting</strong><li> Courses: Diamond, Dunwich Bay, Heritage Heights, Bay Bridge, East Park . </li><li> The Course selection may be changed prior to the tournament. Players will be informed of any such. </li><li> changes before the tournament. </li><li> Race Mode Options: Circuit. </li><li> Track Direction: Forward </li><li> LAPS: 2 </li><li> N20: OFF </li><li> Collision Detection: Off </li><li> Performance Matching: Off</li><li> Min Num. Players: 2 </li><strong> Player Options </strong><li> Game Moment Camera: Off </li><li> Car Damage: Off </li><li> Rearview Mirror: Player&#39; s own discretion </li><li> Units: Player’s own discretion </li><strong>Disconnect </strong><li> Disconnection: Any disconnection of the connection between match players due to System, Network, PC, and/or Power problems/issues</li><li> Intentional Disconnection: Upon judgment by the referee, any offending player will be charged with a loss by forfeit. </li><li>If the disconnection is deemed to be unintentional by the referee, the match will be restarted. If any player does not agree to a match restart, that player will lose by default. </li><strong>Unfair play</strong><li> Use of any cheat program </li><li> Intentional disconnection</li><li> Use of any settings exceeding standard and permitted settings </li><li> If the match is disrupted due to unnecessary chatting, the player may be given a warning or lose by default at the referee’s sole discretion. </li><li> Upon discovery of any player committing any violations regarded as unfair play, that player will be disqualified from the tournament. </li><li> During the course of any match, the operations staff and/or referee may determine other actions to be unfair play at any time. </li><li>Two warnings constitute being disqualified from the tournament </li></ul>',
        // 'rules': []
    },
    'module-12': {
        'Image Name': '52.jpg',
        'Contact': 3314051930,
        'Heads': 'Muhammad Ahmad',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'Tekken 7',
        'category': 'E-Sports',
        'Description': '<h3>Rules and Description</h3><strong>Game Settings</strong><p>The following game settings will be used:</p><ul><li>Options: default</li><li>Rounds: 80 second</li><li>Rounds winners: 3</li><li>Authorized characters: all except “Combat”</li><li>Counter pick: no</li><strong>Match Start  </strong><p>An official match may only be started and played when a tournament official has given the signal to start it. Any match started without approval of a tournament official will be considered as a non-official match. When a match involves the players to be ready, players have one (1) minute after the signal to be ready and start the match.</p><strong>Communication</strong><p>During an official match, players may not communicate with people not involved in the match even when there are pauses in the game. People involved in the match are the players and the tournament officials. </p><strong>Match stopped </strong><p>Players are not expected to leave an official game in progress unless it is authorized by the match format or it has been expressly authorized by the tournament officials. Between two half-time of a game players are not expected to leave their place unless it has been expressly authorized by the tournament officials. Between two games during a best-of-three match or an overtime players are authorized to leave their computer before the next game start. But they can’t leave the tournament area. Players are only authorized to leave the tournament area with the permission of a tournament official.</p><strong>Match Interrupted</strong><p>If a game is involuntary interrupted (player crash, server crash, network cut, etc.) the tournament officials may or may not decide to replay the game. If the match must be replay it will be according to the following rules:</p><ul><li>If no player won a round before the interruption the entire match is replayed.</li><li>If one round was won before the interruption, the game interrupted is replayed with the remaining round to play. The round scored of the interrupted game will be added to the final score of the new game </li><li>Spamming Is Strictly Not Allowed</li></ul>',
        // 'rules': []
    },
    'module-13': {
        'Image Name': '54.jpg',
        'Contact': 3335255090,
        'Heads': 'Musfirah Ehsan',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 1000,
        'Name of Module': 'Parliamentary Debates',
        'category': 'Non-Technical',
        'Description': '<h3>Rules and Regulations</h3><ul><li>British style of parliamentary debates will be followed.Each debating match will consist of four teams;two to propose the motion and two to oppose it.Their roles are split into two categories, the Opening teams and the Closing teams. <br><strong> Opening Factions: </strong> The first factions on each government and opposition team, known as the opening -actions, have four basic roles in a British Parliamentary debate. They must: <ul><li>Define the topic of the debate.</li><li>Present their case.</li><li>Respond to arguments of the opposing first faction.</li><li>Maintain their relevance during the debate.</li></ul><strong>Closing Factions:</strong> The roles of the second two factions are to: <ul><li>Introduce a case extension. </li><li>Establish and maintain their relevance early in the debate.</li><li>Respond to the arguments of the first factions.</li><li>Respond to the case extension of the opposing second faction.</li></ul>In addition, the final two speakers of the debate known as the Whips take a similar role to the third speakers. <ul><li>They may not introduce new arguments for their faction.</li><li>They must respond to both opposing factions & imp.Arguments</li><li>They should briefly sum up their case.</li></ul></li><li>Each team will consist of two members.</li><li>The role of each team and the motion of the debate will be announced fifteen minutes prior to the start of the debate.</li><li>Each debate shall be adjudicated upon by a panel of adjudicators.One of these shall be designated as Chairperson.The decision of the adjudicators will be unchallengeable and final.</li><li>Each debate shall be timed by a timekeeper.In the absence of a timekeeper, a member of the adjudication panel will time the speeches.</li><li>Teams will comprise the following members:<ul>I.<li>OPENING GOVERNMENT:<ul><li>Prime minister.</li><li>Deputy prime minister.</li></ul></ul><ul>CLOSING GOVERNMENT: <li>Member of government.</li><li>Government whip.</li></ul><ul>OPENING OPPOSITION:<li>Leader of opposition.</li><li>Deputy leader of opposition.</li></ul><ul>CLOSING OPPOSITION:<li>Member of opposition.</li><li>Opposition whip.</li><ul></li><li>Speakers not‘ holding the floor’ may not rise during a speech unless it is to offer a‘ Point of Information’.Speakers doing so, or considered to be heckling, barracking or whose behavior is interfering with the acceptable course of a debate will be declared‘ out of order’ or will be‘ called to order’ by the Chairperson.</li><li>Match - ups and venues will be announced before motions are revealed.</li><li>Teams failing to arrive in time for the debate will forfeit that particular round.</li><li>The timing of each speech starts at the moment that the member begins speaking.</li><li>Once the double knock of the gavel has sounded, speakers have 1 minute left, during which they should conclude their speech.After the time has elapsed, there will be a continuous knocking of the gavel, and adjudicators must disregard the rest of that particular speech.Speakers continuing after the time elapsed can also be penalized by the adjudicators.</li><li>If the speaker concludes his / her speech before the second single knock of the gavel, he or she should be penalized under Method and possibly also under Matter.The latter, assuming that less matter was advanced, or that it was clearly underdeveloped.</li><li>Points of Information(POIs’) may be offered, after the first single knock of the gavel(which will sound after 1 minute) and up to the second single knock of the gavel(which will sound after 6 minutes).Points of Information may not be offered during the first and last minutes of the speech.If a Point of Information is offered in the first or the last minute of a speech, it is the duty of the speaker holding the floor to reject as being out of order. Only if the speaker holding the floor fails to do the so, the chair of the adjudicator panel may very briefly intervene and call the house to order.</li><li> POI must be indicated by a member of an opposing team rising from his / her seat. <li><li> A member holding the floor must respond to an opposing member, offering POI, by a clear hand gesture or verbal acceptance / rejection. </li><li> If POI is accepted, the point should be phrased as a question, or clarification, or comment, and ideally made in no more than 15 seconds.Points of Information should be such that they allow the member holding the floor some chance of responding. </li><li> After POI has been offered, no further clarifications may be sought either by the speaker holding the floor or by the member offering the Point of Information, except strictly in situations where the Point of Information is clearly inaudible, and therefore a repetition of the same is necessitated. </li><li> Once a POI is accepted the speaker holding the stage is bound to give adequate time for the completion of the question. </li><li> Order and Timing of Speeches:<ul><li> Prime Minister(7 minutes) </li><li> Leader Opposition(7 minutes) </li><li> Deputy Prime Minister(7 minutes) </li><li> Deputy Leader Opposition(7 minutes) </li><li> Member Government(7 minutes) </li><li> Member Opposition(7 minutes) </li><li> Government Whip(5 minutes) </li><li> Opposition Whip(5 minutes) </li><ul></li><li> Audience is allowed during the debate. </li><li> PiON’ 19 team reserves the rights of photography and videography of the event and posting the content on any platform. </li><li> The event head will have the authority to disqualify any team / participant in case of violation of rules or misbehavior.</li><ul>',
        // 'rules': []
    },
    'module-14': {
        'Image Name': '55.jpg',
        'Contact': 3341541549,
        'Heads': 'Sarmad Salman',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 250,
        'Name of Module': 'Product Photography',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>The product to be photographed will be assigned and given to the contestants. </li><li>The photographs must be relevant to the product image. </li><li>Photo must have been taken in the last 24 hours. </li><li>At least 6-million-pixel resolution (2800 x 2000 pixels). </li><li>Must have been taken by the entrant. </li></ul>',
        // 'rules': []
    },
    'module-15': {
        'Image Name': '56.jpg',
        'Contact': 3005414147,
        'Heads': 'Adil Tiwana',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 250,
        'Name of Module': 'Portrait Retouching',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>All participants must use Adobe Photoshop. </li><li>All participants should bring their own laptops. </li><li>The participants cannot use presets or actions. </li><li>The time for the competition will be 1 hour. </li><li>The participants will have to retouch 2 photographs each. </li></ul>',
        // 'rules': []
    },
    'module-16': {
        'Image Name': '57.jpg',
        'Contact': 3457707731,
        'Heads': 'Umair Shaffi',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 250,
        'Name of Module': 'Portrait Photography',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>Participant will have to choose among the given locations. </li><li>Participant will be a given a specific time limit to shoot the model. </li><li>Post processing will be done by the participant himself/herself. </li><li>Minimum of 3 photos must be submitted. </li></ul>',
        // 'rules': []
    },
    'module-17': {
        'Image Name': '1.jpg',
        'Contact': 3340754787,
        'Heads': 'Inam Elahi',
        'Maximum Members': 3,
        'Minimun Members': 3,
        'Module Fee': 500,
        'Name of Module': 'Scrap Art',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>Each team have to build something useful and creative simultaneously with scrap that may include bottles, bottle caps, CDs, Ribbons, Colors etc. </li><li>Each team will consist of 3 members. </li><li>Time given : 2 hours </li>4-	<li>The judgement criteria is as follows: <ul><li>Creativity 60% </li><li>Aesthetics 10% </li><li>Usefulness 30%</li></ul></li></ul>',
        // 'rules': []
    },
    'module-18': {
        'Image Name': '4.jpg',
        'Contact': 3214896939,
        'Heads': 'Irtiza',
        'Maximum Members': 4,
        'Minimun Members': 1,
        'Module Fee': 1000,
        'Name of Module': 'Live Painting',
        'category': 'Non-Technical',
        'Description': '<p>Painting competitions have long held an important place in the art world. Through these contests, you are able to display your work among your peers, have it reviewed by esteemed judges, and secure important exposure. PiON\'19 gives you a chance to show your artistic skills; as painting is a skill that can be mastered by anyone because it is not dependent on talent. In this competition, teams will be provided themes. Teams will have to choose from of the given themes. Based upon which, participants will e her draw or paint. Artwork can be a sketching, comic or a painting. The topics for the competition are Cracks, Discrimination And Fantasy.</p><h3>Rules</h3><ul><li>We will give each team a canvas, paintbrushes and paints. </li><li>They will be given 2 hours to complete their painting. </li><li>Each team will have 4 members at max. </li><li>Rules are prone to change. </li><li>They cannot use any other kind of art supply to make their painting. </li><li>The best painting will be chosen as the winner. </li><li>Acrylic paints will be provided. </li></ul>',
        // 'rules': []
    },
    'module-19': {
        'Image Name': '5.jpg',
        'Contact': 3119580075,
        'Heads': 'Ammar Mukhtar',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'Calligraphy & Sketching',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>Teams will consist of one person only. </li><li>Participants will be provided with one A3 sheet, pencil, black marker and pointer. </li><li>Participants will have 1.5 hours (90 minutes) to complete their work. </li><li>Calligraphy can be in any language. </li></ul>',
        // 'rules': []
    },
    'module-20': {
        'Image Name': '2.jpg',
        'Contact': 3040090040,
        'Heads': 'Aamir Abbas',
        'Maximum Members': 0,
        'Minimun Members': 0,
        'Module Fee': 0,
        'Name of Module': 'Got Talent',
        'category': 'Non-Technical',
        'Description': '<p>This module will enable our participants to express themselves by spoken word poetry, narrated prose, singing or any other kind of performance.</p><h3>Rules<h3><ul><li>Each team will have to sign up for this beforehand. </li><li>We will give 5-8 minutes to each participant. This will promote literature and arts within our participants. </li></ul>',
        // 'rules': []
    },
    'module-21': {
        'Image Name': '3.jpg',
        'Contact': 3305377966,
        'Heads': 'Shan Yousaf',
        'Maximum Members': 2,
        'Minimun Members': 1,
        'Module Fee': 1000,
        'Name of Module': 'T-Shirt Design',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>Each team will consist of 2 members. </li><li>The time duration of this contest will be 1.5 hours (90 minutes). </li><li>Participants should not bring anything with them. The essential material will be provided to all the teams. </li><li>Your shirt should not depict any moral turpitude. </li><li>The selection of the team will be on first come first get basis </li><li>Maximum of 20 teams will be entertained. </li></ul><h3>Materials</h3><ul><li>White plain T-shirts </li><li>Textile colors</li><li>Paint brushes</li></ul>',
        // 'rules': []
    },
    'module-22': {
        'Image Name': '7.jpg',
        'Contact': 3206641100,
        'Heads': 'Muhammad Ubaidullah',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 250,
        'Name of Module': 'Writing',
        'category': 'Non-Technical',
        'Description': '<h3>Rules for Essay Writing</h3><ul><li>Five themes will be announced 5 days before the competition. </li><li>Two selected topics will be announced on spot and the participants will have to write an essay on one of those topics. </li><li>Word limit is 1000-1500. </li><li>Participants will be given a time of 2 hours to complete their essay. </li></ul><h3>Rules for Story Writing</h3><ul><li>Topics will be announced on spot and the participants will have to write a story on one of those topics. </li><li>Word limit is 1500-2000. </li><li>Participants will be given a time of 2.5 hours to complete their essay. </li></ul>',
        // 'rules': []
    },
    // 'module-23': {
    //     'Image Name': '25.jpg',
    //     'Contact': 0,
    //     'Heads': 'Muhammad Moeeze',
    //     'Maximum Members': 0,
    //     'Minimun Members': 0,
    //     'Module Fee': 0,
    //     'Name of Module': 'All Rounder',
    //     // 'category': '',
    //     'Description': '',
    //     // 'rules': []
    // },
    'module-24': {
        'Image Name': '10.jpg',
        'Contact': 3340754787,
        'Heads': 'M Inaam Elahi',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 300,
        'Name of Module': 'Badminton (Boys Single)',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Knock Out system will be followed. </li><li>Each match consists of 3 sets and each set has 21 points. </li><li>If a player wins first 2 sets 3rd set will not be played. </li><li>All international rules will be followed. </li><li>Referee’s decision will be final. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><h4>SAFETY</h4><p>As in any physical sport, there is a risk of injury. Participants are deemed to acknowledge and accept the risks. The organizers cannot accept any liability for damage or injury to person or property sustained by any participant or spectators.</p>',
        // 'rules': []
    },
    'module-25': {
        'Image Name': '10.jpg',
        'Contact': 3340754787,
        'Heads': 'Isra Imran',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 300,
        'Name of Module': 'Badminton (Girls Single)',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Knock Out system will be followed. </li><li>Each match consists of 3 sets and each set has 21 points. </li><li>If a player wins first 2 sets 3rd set will not be played. </li><li>All international rules will be followed. </li><li>Referee’s decision will be final. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><h4>SAFETY</h4><p>As in any physical sport, there is a risk of injury. Participants are deemed to acknowledge and accept the risks. The organizers cannot accept any liability for damage or injury to person or property sustained by any participant or spectators.</p>',
        // 'rules': []
    },
    'module-26': {
        'Image Name': '10.jpg',
        'Contact': 3340754787,
        'Heads': 'M Inaam Elahi',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Badminton (Boys Doubles)',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Knock Out system will be followed. </li><li>Each match consists of 3 sets and each set has 21 points. </li><li>If a player wins first 2 sets 3rd set will not be played. </li><li>All international rules will be followed. </li><li>Referee’s decision will be final. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><h4>SAFETY</h4><p>As in any physical sport, there is a risk of injury. Participants are deemed to acknowledge and accept the risks. The organizers cannot accept any liability for damage or injury to person or property sustained by any participant or spectators.</p>',
        // 'rules': []
    },
    'module-27': {
        'Image Name': '10.jpg',
        'Contact': 3340754787,
        'Heads': 'Isra Imran',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Badminton (Girls Doubles)',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Knock Out system will be followed. </li><li>Each match consists of 3 sets and each set has 21 points. </li><li>If a player wins first 2 sets 3rd set will not be played. </li><li>All international rules will be followed. </li><li>Referee’s decision will be final. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><h4>SAFETY</h4><p>As in any physical sport, there is a risk of injury. Participants are deemed to acknowledge and accept the risks. The organizers cannot accept any liability for damage or injury to person or property sustained by any participant or spectators.</p>',
        // 'rules': []
    },
    'module-28': {
        'Image Name': '11.jpg',
        'Contact': 3160053010,
        'Heads': 'Qazi Abdullah',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 300,
        'Name of Module': 'Table Tennis (Boys Single)',
        'category': 'Sports',
        'Description': '<h3>Rules </h3><strong>The NET Assembly</strong><ul><li>The net assembly shall consist of the net, its suspension, and the supporting posts,including the clamps attaching them to the table. </li><li>The net shall be suspended by a cord attached at each end to an upright post 15.25 cm. (6 in.) high, the outside limits of the post being 15.25 cm. outside the side lines. </li><li>The net, with its suspension, along its whole length, shall be 15.25 cm. (6 in.) above the playing surface. The bottom of the net, along its whole length, shall be as close as possible to the playing surface and the ends of the net shall be as close as possible to the supporting posts. </li></ul><strong>The Racket</strong><ul><li>The racquet may be of any size, shape, or weight but the blade shall be flat and rigid. </li><li>At least 85% of the blade by thickness shall be of natural wood. An adhesive layer within the blade may be reinforced with fibrous material such as carbon fiber, glass fiber, or compressed paper but shall not be thicker than 7.5% of the total thickness or 0.35 mm, whichever is the smaller. </li><li>A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber with pimples outward having a total thickness including adhesive of not more than 2 mm. or sandwich rubber with pimples inwards or outward having a total thickness including adhesive of not more than 4 mm. </li><li>Ordinary pimpled rubber is a single layer of non-cellular rubber, natural or synthetic, with pimples evenly distributed over its surface at a density of not less than 10 per sq. cm. and not more than 50 per sq. cm. </li><li>Sandwich rubber is a single layer of cellular rubber covered with a single outer layer of ordinary pimpled rubber, the thickness of the pimpled rubber not being more than 2 mm. </li><li>The covering material shall extend up to but not beyond the limits of the blade, except that the part nearest the handle and gripped by the fingers may be left uncovered or covered with any material and may be considered part of the handle. </li><li>The blade, any layer within the blade, and any layer of covering material or adhesive shall be continuous and of even thickness. </li><li>The surface of the covering material on a side of a blade or of a side of the blade if it is left uncovered, shall be matt, bright red on one side and black on the other. </li><li>Slight deviations from uniformity of color or continuity of covering due to fading, wear, or accidental damage may be ignored provided they do not significantly change the characteristics of the surface. </li><li>At the start of a match and if he changes his racquet during a match, a player shall show his opponent and the umpire the racquet he is about to use and shall allow them to examine it. </li><li>If a player breaks his racquet during a game, he shall replace it immediately with another racquet which he has brought with him to the playing area or one which is handed to him in the playing area. A racket shall not be changed in an individual match unless it is accidentally damaged so badly that it cannot be used. If a player changes a racket during an individual match without notification, the umpire shall suspend play and report to the referee. </li><li>The covering material on a side of the blade used for striking the ball shall be of a brand and type currently approved by the USATT and shall be attached to the blade so that the trademark and ITTF logo (if applicable) are clearly visible near the edge of the striking surface. </li><li>If a player strikes the ball in play with a side of the blade whose surface does not comply with the requirements of the Rules, his opponent will be awarded a point. </li></ul><strong>Definitions</strong><ul><li>A rally is the period during which the ball is in play. </li><li>The ball is in play from the last moment at which it is stationary on the palm of the free hand before being intentionally projected in service until it touches anything other than the playing surface, the net assembly, the racquet held in the racquet hand or the racquet hand below the wrist, or until the rally is otherwise decided a let or a point. </li><li>A let is a rally of which the result is not scored. </li><li>A point is a rally of which the result is scored. </li><li>The racquet hand is the hand carrying the racquet. </li><li>The free hand is the hand not carrying the racquet. </li><li>A player strikes the ball if he touches it in play with his racquet, held in the racquet hand, or with his racquet hand below the wrist. </li><li>A player obstructs the ball if he or anything he wears or carries, touches it in play when it is traveling toward the playing surface and has not passed beyond the end line, not having touched his court since last being struck by his opponent. </li><li>The server is the player due to strike the ball first in a rally. </li><li>The receiver is the player due to strike the ball second in a rally. </li><li>The umpire is the person appointed to decide the results of each rally. </li><li>The assistant umpire is the person appointed to assist the umpire. The stroke counter is the person appointed to count strokes under the expedite system. </li><li>Anything that a player wears or carries includes anything that he was wearing or carrying at the start of the rally. </li><li>The ball shall be regarded as passing over or around the net assembly if it passes under or outside the projection of the net assembly outside the table. </li></ul><strong>Service</strong><ul><li>Service shall start with the ball resting freely on the open palm of the server\'s stationary free hand. </li><li>The server shall then project the ball near vertically upwards, without imparting spin, so that it rises as least 16 cm after leaving the palm of the free hand and then falls without touching anything before being struck. </li><li>As the ball is falling, the server shall strike it so that it touches first his court and then, passing directly over or around the net assembly touches the receiver\'s court. </li><li>In doubles the ball shall touch successively the right half court of the server and receiver. </li><li>From the start of service until it is struck, the ball shall be above the level of the playing surface and behind the server\'s end line, and it shall not be hidden from the receiver by any part of the body or clothing of the server or his doubles partner. </li><li>It is the responsibility of the player to serve so that the umpire or the assistant umpire can see that he complies with the requirements for a good service. </li><li>If there is no Assistant Umpire, and the umpire is doubtful of the legality of a service he may, on the first occasion in a match, warn the server without awarding a point. </li><li>If subsequently in the match a service by that player or his doubles partner is of dubious legality, for same reason or for any other reason, the receiver shall score a point. </li><li>Whenever there is a clear failure to comply with the requirements for a good service, no warning shall be given and the receiver shall score a point. </li><li>Exceptionally, the umpire may relax the requirements for a good service where he is satisfied that compliance is prevented by physical disability. </li><li>If, in attempting to serve, a player fails to strike the ball while it is in play, his opponent will be awarded a point. </li></ul><strong>A Good Return</strong><ul><li>The ball, having been served or returned in play, shall be struck so that it passesdirectly over or around the net assembly and touches the opponent\'s court, either directly or after touching the net assembly. </li><li>If the ball, having been served or returned in play, returns with its own impetus over the net, it may be struck so that it touches directly the opponent\'s court. </li></ul><strong>The Order of the Play</strong><ul><li>In singles, the server shall first make a good service, the receiver shall then make a good return, and thereafter, server and receiver alternately shall each make a good return. </li><li>In doubles, the server shall first make a good service, the receiver shall then make a good return, the partner of the server shall then make a good return, the partner of the receiver shall then make a good return, and thereafter, each player alternately in that sequence shall make a good return. </li></ul><strong>A LET</strong>A rally is a let:<ul><li>If in service the ball, in passing over or around the net assembly, touches it, provided the serve is otherwise good or is obstructed by the receiver or his partner. </li><li>If the service is delivered when the receiving player or pair is not ready, provided that neither the receiver nor his partner attempts to strike the ball. </li><li>If, the failure to make a good service or a good return or otherwise to comply with the Laws is due to a disturbance outside the control of the player. </li></ul>If play is interrupted by the umpire or assistant umpire.<ul><li> To correct an error in the order of serving or receiving or ends. </li><li> To introduce the expedite system. </li><li> To warn or penalize a player. </li><li> Because the conditions of play are disturbed in a way which could affect the outcome of the rally. </li></ul><strong>A Point</strong>Unless the rally is a let, a player shall score the point:<ul><li>If his opponent fails to make a good service. </li><li>If his opponent fails to make a good return. </li><li>If, after he has made a good service or a good return, the ball touches anything other than the net assembly before being struck by his opponent. </li><li>If the ball passes beyond his end line without touching his court, after being struck by his opponent. </li><li>If his opponent obstructs the ball, except as provided in Rule 9.1. </li><li>If his opponent strikes the ball twice successively. </li><li>If his opponent strikes the ball with a side of the racquet blade having an illegal surface. </li><li>If his opponent, or anything he wears or carries, moves the playing surface. </li><li>If his opponent, or anything he wears or carries, touches the net assembly. </li><li>If his opponent\'s free hand touches the playing surface. </li><li>If, in doubles, his opponent strikes the ball out of sequence established by the first server and first receiver. </li><li>As provided under the expedite system. </li><li>If the umpire assesses a penalty point against his opponent. </li></ul><strong>A Game</strong><ul><li>Knockout system will be followed. </li><li>A game shall be won by the player or pair first scoring 11 points unless both players or pairs score 10 points, when the game shall be won by the first player or pair subsequently gaining a lead of 2 points. </li></ul><strong>A Match</strong><ul><li>A match shall consist of the best of any odd number of games. </li><li>Play shall be continuous throughout, except for authorized intervals. </li></ul><strong>The Choice of Ends and Serves</strong><ul><li>The choice of ends and the right to serve or receive first in a match shall be decided by lot and the winner may choose to serve or receive first or to start at a particular end. </li><li>When one player or pair has chosen to serve or receive first or to start at a particular end, the other player or pair shall have the other choice. </li><li>After each 2 points have been scored the receiving player or pair shall become the serving player or pair and so on until the end of the game, unless both players or pairs score 10 points or the expedite system is in operation, when the sequence of serving and receiving shall be the same but each player shall serve for only 1 point in turn. </li><li>In the first game of a match the pair who has the right to serve first shall decide which of them shall do so and in the first game of a match, the opposing pair shall then decide which partner will receive first. In subsequent games of a match, the first server having been chosen, the first receiver shall be the player who served to him in the preceding game. </li><li>In doubles, at each change of service the previous receiver shall become the server and the partner of the previous server shall become the receiver. </li><li>The player or pair serving first in a game shall receive first in the next game of the match, and in the last possible game of a doubles match the pair due to receive next shall change their order of receiving when first one pair scores 5 points. </li><li>The player or pair starting at one end in a game shall start at the other end in the next game of the match and in the last possible game of a match the players or pairs shall change ends when first one player or pair scores. </li></ul><strong>The Expedite System</strong><ul><li>Except where both players or pairs have scored at least 9 points, the expedite system shall come into operation if a game is unfinished after 10 minutes play or at any earlier time at the request of both players or pairs. </li><li>If the ball is in play when the game is interrupted, play shall restart with service by the player who served in the rally that was interrupted. </li><li>If the ball was not in play when the game was interrupted, play shall restart with service by the player who received service in the immediately preceding rally. </li><li>Thereafter, each player shall serve 1 point in turn. If the receiving player or pair makes thirteen successive good returns, the receiver shall score a point. </li><li>If the expedite system is introduced, or if a game lasts longer than 10 minutes, all subsequent games of the match shall be played under the expedite system. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><strong>Discipline (Advice) </strong><ul><li>In a team event, players may receive advice from anyone.<li>In an individual event, a player or pair may receive advice only from one person, designated beforehand to the umpire. If the players of a doubles pair are from different associations, each may designate an adviser. If an unauthorized person gives advice, the umpire shall hold up a red card and send him away from the playing area. </li><li>Players may receive advice only during the intervals between games, during a time-out or during other authorized suspension of play. If any authorized person gives advice at other times, the umpire shall hold up a yellow card to warn him that any further such offense will result in his dismissal from the playing area. </li><li>After a warning has been given, if in the same team match or the same match of an individual event anyone again gives advice illegally, the umpire shall hold up a red card and send him away from the playing area, whether or not he was the person warned. </li><li>In a team match, the dismissed adviser shall not be allowed to return, except when required to play, until the team match has ended. In an individual event, he shall not be allowed to return until the individual match has ended.<li>If the dismissed adviser refuses to leave or returns before the end of the match, the umpire shall suspend play and report to the referee. </li><li>These regulations shall apply only to advice on play and shall not prevent a player or captain, as appropriate, from making a legitimate appeal nor hinder a consultation with an interpreter or association representative on the explanation of a juridical decision. </li></ul><strong>Misbehaviour</strong><ul><li>Players and coaches shall refrain from conduct that may unfairly affect an opponent, offend spectators or bring the game into disrepute. Examples are: abusive language, deliberately breaking the ball or hitting it out of the playing area, kicking the table or surrounds or disrespect to match officials. </li><li>If at any time a player or coach commits a serious offence the umpire shall suspend play and report immediately to the referee. For less serious offences the umpire may, on the first occasion, hold up a yellow card and warn the offender that any further offence is liable to incur penalties. </li><li>If a player who has been warned commits a second offence in the same individual or team match, the umpire shall award one point to the player\'s opponent and after a further offence he shall award two points to his opponent, each time holding up a yellow and a red card together. </li><li>If a player against whom 3 penalty points have been awarded in the same individual or team match continues to misbehave the umpire shall suspend play and report immediately to the referee. </li><li>A warning or penalty incurred by either player of a doubles pair shall apply to the pair, but not to the non-offending player in a subsequent individual match of the same team match. At the start of a doubles match the pair shall be regarded as having incurred the higher of any warnings or penalties incurred by either player in the same team match. </li><li>If a coach who has been warned commits a further offence in the same individual or team match the umpire shall hold up a red card and send him away from the playing area until the end of the team match, or in an individual event, the end of the individual match. </li><li>The referee shall have power to disqualify a player from a match, an event, or a competition for seriously unfair or offensive behavior whether reported by the umpire or not. As he does so he shall hold up a red card. </li><li>A player who is disqualified from 2 individual matches of a team or individual event shall automatically be disqualified from that team event or individual competition. </li><li>The referee may disqualify for the remainder of a competition anyone who has twice been sent away from the playing area during that competition. </li></ul>',
        // 'rules': []
    },
    'module-29': {
        'Image Name': '11.jpg',
        'Contact': 3160053010,
        'Heads': 'Nimra Riaz',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 300,
        'Name of Module': 'Table Tennis (Girls Single)',
        'category': 'Sports',
        'Description': '<h3>Rules </h3><strong>The NET Assembly</strong><ul><li>The net assembly shall consist of the net, its suspension, and the supporting posts,including the clamps attaching them to the table. </li><li>The net shall be suspended by a cord attached at each end to an upright post 15.25 cm. (6 in.) high, the outside limits of the post being 15.25 cm. outside the side lines. </li><li>The net, with its suspension, along its whole length, shall be 15.25 cm. (6 in.) above the playing surface. The bottom of the net, along its whole length, shall be as close as possible to the playing surface and the ends of the net shall be as close as possible to the supporting posts. </li></ul><strong>The Racket</strong><ul><li>The racquet may be of any size, shape, or weight but the blade shall be flat and rigid. </li><li>At least 85% of the blade by thickness shall be of natural wood. An adhesive layer within the blade may be reinforced with fibrous material such as carbon fiber, glass fiber, or compressed paper but shall not be thicker than 7.5% of the total thickness or 0.35 mm, whichever is the smaller. </li><li>A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber with pimples outward having a total thickness including adhesive of not more than 2 mm. or sandwich rubber with pimples inwards or outward having a total thickness including adhesive of not more than 4 mm. </li><li>Ordinary pimpled rubber is a single layer of non-cellular rubber, natural or synthetic, with pimples evenly distributed over its surface at a density of not less than 10 per sq. cm. and not more than 50 per sq. cm. </li><li>Sandwich rubber is a single layer of cellular rubber covered with a single outer layer of ordinary pimpled rubber, the thickness of the pimpled rubber not being more than 2 mm. </li><li>The covering material shall extend up to but not beyond the limits of the blade, except that the part nearest the handle and gripped by the fingers may be left uncovered or covered with any material and may be considered part of the handle. </li><li>The blade, any layer within the blade, and any layer of covering material or adhesive shall be continuous and of even thickness. </li><li>The surface of the covering material on a side of a blade or of a side of the blade if it is left uncovered, shall be matt, bright red on one side and black on the other. </li><li>Slight deviations from uniformity of color or continuity of covering due to fading, wear, or accidental damage may be ignored provided they do not significantly change the characteristics of the surface. </li><li>At the start of a match and if he changes his racquet during a match, a player shall show his opponent and the umpire the racquet he is about to use and shall allow them to examine it. </li><li>If a player breaks his racquet during a game, he shall replace it immediately with another racquet which he has brought with him to the playing area or one which is handed to him in the playing area. A racket shall not be changed in an individual match unless it is accidentally damaged so badly that it cannot be used. If a player changes a racket during an individual match without notification, the umpire shall suspend play and report to the referee. </li><li>The covering material on a side of the blade used for striking the ball shall be of a brand and type currently approved by the USATT and shall be attached to the blade so that the trademark and ITTF logo (if applicable) are clearly visible near the edge of the striking surface. </li><li>If a player strikes the ball in play with a side of the blade whose surface does not comply with the requirements of the Rules, his opponent will be awarded a point. </li></ul><strong>Definitions</strong><ul><li>A rally is the period during which the ball is in play. </li><li>The ball is in play from the last moment at which it is stationary on the palm of the free hand before being intentionally projected in service until it touches anything other than the playing surface, the net assembly, the racquet held in the racquet hand or the racquet hand below the wrist, or until the rally is otherwise decided a let or a point. </li><li>A let is a rally of which the result is not scored. </li><li>A point is a rally of which the result is scored. </li><li>The racquet hand is the hand carrying the racquet. </li><li>The free hand is the hand not carrying the racquet. </li><li>A player strikes the ball if he touches it in play with his racquet, held in the racquet hand, or with his racquet hand below the wrist. </li><li>A player obstructs the ball if he or anything he wears or carries, touches it in play when it is traveling toward the playing surface and has not passed beyond the end line, not having touched his court since last being struck by his opponent. </li><li>The server is the player due to strike the ball first in a rally. </li><li>The receiver is the player due to strike the ball second in a rally. </li><li>The umpire is the person appointed to decide the results of each rally. </li><li>The assistant umpire is the person appointed to assist the umpire. The stroke counter is the person appointed to count strokes under the expedite system. </li><li>Anything that a player wears or carries includes anything that he was wearing or carrying at the start of the rally. </li><li>The ball shall be regarded as passing over or around the net assembly if it passes under or outside the projection of the net assembly outside the table. </li></ul><strong>Service</strong><ul><li>Service shall start with the ball resting freely on the open palm of the server\'s stationary free hand. </li><li>The server shall then project the ball near vertically upwards, without imparting spin, so that it rises as least 16 cm after leaving the palm of the free hand and then falls without touching anything before being struck. </li><li>As the ball is falling, the server shall strike it so that it touches first his court and then, passing directly over or around the net assembly touches the receiver\'s court. </li><li>In doubles the ball shall touch successively the right half court of the server and receiver. </li><li>From the start of service until it is struck, the ball shall be above the level of the playing surface and behind the server\'s end line, and it shall not be hidden from the receiver by any part of the body or clothing of the server or his doubles partner. </li><li>It is the responsibility of the player to serve so that the umpire or the assistant umpire can see that he complies with the requirements for a good service. </li><li>If there is no Assistant Umpire, and the umpire is doubtful of the legality of a service he may, on the first occasion in a match, warn the server without awarding a point. </li><li>If subsequently in the match a service by that player or his doubles partner is of dubious legality, for same reason or for any other reason, the receiver shall score a point. </li><li>Whenever there is a clear failure to comply with the requirements for a good service, no warning shall be given and the receiver shall score a point. </li><li>Exceptionally, the umpire may relax the requirements for a good service where he is satisfied that compliance is prevented by physical disability. </li><li>If, in attempting to serve, a player fails to strike the ball while it is in play, his opponent will be awarded a point. </li></ul><strong>A Good Return</strong><ul><li>The ball, having been served or returned in play, shall be struck so that it passesdirectly over or around the net assembly and touches the opponent\'s court, either directly or after touching the net assembly. </li><li>If the ball, having been served or returned in play, returns with its own impetus over the net, it may be struck so that it touches directly the opponent\'s court. </li></ul><strong>The Order of the Play</strong><ul><li>In singles, the server shall first make a good service, the receiver shall then make a good return, and thereafter, server and receiver alternately shall each make a good return. </li><li>In doubles, the server shall first make a good service, the receiver shall then make a good return, the partner of the server shall then make a good return, the partner of the receiver shall then make a good return, and thereafter, each player alternately in that sequence shall make a good return. </li></ul><strong>A LET</strong>A rally is a let:<ul><li>If in service the ball, in passing over or around the net assembly, touches it, provided the serve is otherwise good or is obstructed by the receiver or his partner. </li><li>If the service is delivered when the receiving player or pair is not ready, provided that neither the receiver nor his partner attempts to strike the ball. </li><li>If, the failure to make a good service or a good return or otherwise to comply with the Laws is due to a disturbance outside the control of the player. </li></ul>If play is interrupted by the umpire or assistant umpire.<ul><li> To correct an error in the order of serving or receiving or ends. </li><li> To introduce the expedite system. </li><li> To warn or penalize a player. </li><li> Because the conditions of play are disturbed in a way which could affect the outcome of the rally. </li></ul><strong>A Point</strong>Unless the rally is a let, a player shall score the point:<ul><li>If his opponent fails to make a good service. </li><li>If his opponent fails to make a good return. </li><li>If, after he has made a good service or a good return, the ball touches anything other than the net assembly before being struck by his opponent. </li><li>If the ball passes beyond his end line without touching his court, after being struck by his opponent. </li><li>If his opponent obstructs the ball, except as provided in Rule 9.1. </li><li>If his opponent strikes the ball twice successively. </li><li>If his opponent strikes the ball with a side of the racquet blade having an illegal surface. </li><li>If his opponent, or anything he wears or carries, moves the playing surface. </li><li>If his opponent, or anything he wears or carries, touches the net assembly. </li><li>If his opponent\'s free hand touches the playing surface. </li><li>If, in doubles, his opponent strikes the ball out of sequence established by the first server and first receiver. </li><li>As provided under the expedite system. </li><li>If the umpire assesses a penalty point against his opponent. </li></ul><strong>A Game</strong><ul><li>Knockout system will be followed. </li><li>A game shall be won by the player or pair first scoring 11 points unless both players or pairs score 10 points, when the game shall be won by the first player or pair subsequently gaining a lead of 2 points. </li></ul><strong>A Match</strong><ul><li>A match shall consist of the best of any odd number of games. </li><li>Play shall be continuous throughout, except for authorized intervals. </li></ul><strong>The Choice of Ends and Serves</strong><ul><li>The choice of ends and the right to serve or receive first in a match shall be decided by lot and the winner may choose to serve or receive first or to start at a particular end. </li><li>When one player or pair has chosen to serve or receive first or to start at a particular end, the other player or pair shall have the other choice. </li><li>After each 2 points have been scored the receiving player or pair shall become the serving player or pair and so on until the end of the game, unless both players or pairs score 10 points or the expedite system is in operation, when the sequence of serving and receiving shall be the same but each player shall serve for only 1 point in turn. </li><li>In the first game of a match the pair who has the right to serve first shall decide which of them shall do so and in the first game of a match, the opposing pair shall then decide which partner will receive first. In subsequent games of a match, the first server having been chosen, the first receiver shall be the player who served to him in the preceding game. </li><li>In doubles, at each change of service the previous receiver shall become the server and the partner of the previous server shall become the receiver. </li><li>The player or pair serving first in a game shall receive first in the next game of the match, and in the last possible game of a doubles match the pair due to receive next shall change their order of receiving when first one pair scores 5 points. </li><li>The player or pair starting at one end in a game shall start at the other end in the next game of the match and in the last possible game of a match the players or pairs shall change ends when first one player or pair scores. </li></ul><strong>The Expedite System</strong><ul><li>Except where both players or pairs have scored at least 9 points, the expedite system shall come into operation if a game is unfinished after 10 minutes play or at any earlier time at the request of both players or pairs. </li><li>If the ball is in play when the game is interrupted, play shall restart with service by the player who served in the rally that was interrupted. </li><li>If the ball was not in play when the game was interrupted, play shall restart with service by the player who received service in the immediately preceding rally. </li><li>Thereafter, each player shall serve 1 point in turn. If the receiving player or pair makes thirteen successive good returns, the receiver shall score a point. </li><li>If the expedite system is introduced, or if a game lasts longer than 10 minutes, all subsequent games of the match shall be played under the expedite system. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><strong>Discipline (Advice) </strong><ul><li>In a team event, players may receive advice from anyone.<li>In an individual event, a player or pair may receive advice only from one person, designated beforehand to the umpire. If the players of a doubles pair are from different associations, each may designate an adviser. If an unauthorized person gives advice, the umpire shall hold up a red card and send him away from the playing area. </li><li>Players may receive advice only during the intervals between games, during a time-out or during other authorized suspension of play. If any authorized person gives advice at other times, the umpire shall hold up a yellow card to warn him that any further such offense will result in his dismissal from the playing area. </li><li>After a warning has been given, if in the same team match or the same match of an individual event anyone again gives advice illegally, the umpire shall hold up a red card and send him away from the playing area, whether or not he was the person warned. </li><li>In a team match, the dismissed adviser shall not be allowed to return, except when required to play, until the team match has ended. In an individual event, he shall not be allowed to return until the individual match has ended.<li>If the dismissed adviser refuses to leave or returns before the end of the match, the umpire shall suspend play and report to the referee. </li><li>These regulations shall apply only to advice on play and shall not prevent a player or captain, as appropriate, from making a legitimate appeal nor hinder a consultation with an interpreter or association representative on the explanation of a juridical decision. </li></ul><strong>Misbehaviour</strong><ul><li>Players and coaches shall refrain from conduct that may unfairly affect an opponent, offend spectators or bring the game into disrepute. Examples are: abusive language, deliberately breaking the ball or hitting it out of the playing area, kicking the table or surrounds or disrespect to match officials. </li><li>If at any time a player or coach commits a serious offence the umpire shall suspend play and report immediately to the referee. For less serious offences the umpire may, on the first occasion, hold up a yellow card and warn the offender that any further offence is liable to incur penalties. </li><li>If a player who has been warned commits a second offence in the same individual or team match, the umpire shall award one point to the player\'s opponent and after a further offence he shall award two points to his opponent, each time holding up a yellow and a red card together. </li><li>If a player against whom 3 penalty points have been awarded in the same individual or team match continues to misbehave the umpire shall suspend play and report immediately to the referee. </li><li>A warning or penalty incurred by either player of a doubles pair shall apply to the pair, but not to the non-offending player in a subsequent individual match of the same team match. At the start of a doubles match the pair shall be regarded as having incurred the higher of any warnings or penalties incurred by either player in the same team match. </li><li>If a coach who has been warned commits a further offence in the same individual or team match the umpire shall hold up a red card and send him away from the playing area until the end of the team match, or in an individual event, the end of the individual match. </li><li>The referee shall have power to disqualify a player from a match, an event, or a competition for seriously unfair or offensive behavior whether reported by the umpire or not. As he does so he shall hold up a red card. </li><li>A player who is disqualified from 2 individual matches of a team or individual event shall automatically be disqualified from that team event or individual competition. </li><li>The referee may disqualify for the remainder of a competition anyone who has twice been sent away from the playing area during that competition. </li></ul>',
        // 'rules': []
    },
    'module-30': {
        'Image Name': '11.jpg',
        'Contact': 3160053010,
        'Heads': 'Qazi Abdullah',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 600,
        'Name of Module': 'Table Tennis (Boys Doubles)',
        'category': 'Sports',
        'Description': '<h3>Rules </h3><strong>The NET Assembly</strong><ul><li>The net assembly shall consist of the net, its suspension, and the supporting posts,including the clamps attaching them to the table. </li><li>The net shall be suspended by a cord attached at each end to an upright post 15.25 cm. (6 in.) high, the outside limits of the post being 15.25 cm. outside the side lines. </li><li>The net, with its suspension, along its whole length, shall be 15.25 cm. (6 in.) above the playing surface. The bottom of the net, along its whole length, shall be as close as possible to the playing surface and the ends of the net shall be as close as possible to the supporting posts. </li></ul><strong>The Racket</strong><ul><li>The racquet may be of any size, shape, or weight but the blade shall be flat and rigid. </li><li>At least 85% of the blade by thickness shall be of natural wood. An adhesive layer within the blade may be reinforced with fibrous material such as carbon fiber, glass fiber, or compressed paper but shall not be thicker than 7.5% of the total thickness or 0.35 mm, whichever is the smaller. </li><li>A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber with pimples outward having a total thickness including adhesive of not more than 2 mm. or sandwich rubber with pimples inwards or outward having a total thickness including adhesive of not more than 4 mm. </li><li>Ordinary pimpled rubber is a single layer of non-cellular rubber, natural or synthetic, with pimples evenly distributed over its surface at a density of not less than 10 per sq. cm. and not more than 50 per sq. cm. </li><li>Sandwich rubber is a single layer of cellular rubber covered with a single outer layer of ordinary pimpled rubber, the thickness of the pimpled rubber not being more than 2 mm. </li><li>The covering material shall extend up to but not beyond the limits of the blade, except that the part nearest the handle and gripped by the fingers may be left uncovered or covered with any material and may be considered part of the handle. </li><li>The blade, any layer within the blade, and any layer of covering material or adhesive shall be continuous and of even thickness. </li><li>The surface of the covering material on a side of a blade or of a side of the blade if it is left uncovered, shall be matt, bright red on one side and black on the other. </li><li>Slight deviations from uniformity of color or continuity of covering due to fading, wear, or accidental damage may be ignored provided they do not significantly change the characteristics of the surface. </li><li>At the start of a match and if he changes his racquet during a match, a player shall show his opponent and the umpire the racquet he is about to use and shall allow them to examine it. </li><li>If a player breaks his racquet during a game, he shall replace it immediately with another racquet which he has brought with him to the playing area or one which is handed to him in the playing area. A racket shall not be changed in an individual match unless it is accidentally damaged so badly that it cannot be used. If a player changes a racket during an individual match without notification, the umpire shall suspend play and report to the referee. </li><li>The covering material on a side of the blade used for striking the ball shall be of a brand and type currently approved by the USATT and shall be attached to the blade so that the trademark and ITTF logo (if applicable) are clearly visible near the edge of the striking surface. </li><li>If a player strikes the ball in play with a side of the blade whose surface does not comply with the requirements of the Rules, his opponent will be awarded a point. </li></ul><strong>Definitions</strong><ul><li>A rally is the period during which the ball is in play. </li><li>The ball is in play from the last moment at which it is stationary on the palm of the free hand before being intentionally projected in service until it touches anything other than the playing surface, the net assembly, the racquet held in the racquet hand or the racquet hand below the wrist, or until the rally is otherwise decided a let or a point. </li><li>A let is a rally of which the result is not scored. </li><li>A point is a rally of which the result is scored. </li><li>The racquet hand is the hand carrying the racquet. </li><li>The free hand is the hand not carrying the racquet. </li><li>A player strikes the ball if he touches it in play with his racquet, held in the racquet hand, or with his racquet hand below the wrist. </li><li>A player obstructs the ball if he or anything he wears or carries, touches it in play when it is traveling toward the playing surface and has not passed beyond the end line, not having touched his court since last being struck by his opponent. </li><li>The server is the player due to strike the ball first in a rally. </li><li>The receiver is the player due to strike the ball second in a rally. </li><li>The umpire is the person appointed to decide the results of each rally. </li><li>The assistant umpire is the person appointed to assist the umpire. The stroke counter is the person appointed to count strokes under the expedite system. </li><li>Anything that a player wears or carries includes anything that he was wearing or carrying at the start of the rally. </li><li>The ball shall be regarded as passing over or around the net assembly if it passes under or outside the projection of the net assembly outside the table. </li></ul><strong>Service</strong><ul><li>Service shall start with the ball resting freely on the open palm of the server\'s stationary free hand. </li><li>The server shall then project the ball near vertically upwards, without imparting spin, so that it rises as least 16 cm after leaving the palm of the free hand and then falls without touching anything before being struck. </li><li>As the ball is falling, the server shall strike it so that it touches first his court and then, passing directly over or around the net assembly touches the receiver\'s court. </li><li>In doubles the ball shall touch successively the right half court of the server and receiver. </li><li>From the start of service until it is struck, the ball shall be above the level of the playing surface and behind the server\'s end line, and it shall not be hidden from the receiver by any part of the body or clothing of the server or his doubles partner. </li><li>It is the responsibility of the player to serve so that the umpire or the assistant umpire can see that he complies with the requirements for a good service. </li><li>If there is no Assistant Umpire, and the umpire is doubtful of the legality of a service he may, on the first occasion in a match, warn the server without awarding a point. </li><li>If subsequently in the match a service by that player or his doubles partner is of dubious legality, for same reason or for any other reason, the receiver shall score a point. </li><li>Whenever there is a clear failure to comply with the requirements for a good service, no warning shall be given and the receiver shall score a point. </li><li>Exceptionally, the umpire may relax the requirements for a good service where he is satisfied that compliance is prevented by physical disability. </li><li>If, in attempting to serve, a player fails to strike the ball while it is in play, his opponent will be awarded a point. </li></ul><strong>A Good Return</strong><ul><li>The ball, having been served or returned in play, shall be struck so that it passesdirectly over or around the net assembly and touches the opponent\'s court, either directly or after touching the net assembly. </li><li>If the ball, having been served or returned in play, returns with its own impetus over the net, it may be struck so that it touches directly the opponent\'s court. </li></ul><strong>The Order of the Play</strong><ul><li>In singles, the server shall first make a good service, the receiver shall then make a good return, and thereafter, server and receiver alternately shall each make a good return. </li><li>In doubles, the server shall first make a good service, the receiver shall then make a good return, the partner of the server shall then make a good return, the partner of the receiver shall then make a good return, and thereafter, each player alternately in that sequence shall make a good return. </li></ul><strong>A LET</strong>A rally is a let:<ul><li>If in service the ball, in passing over or around the net assembly, touches it, provided the serve is otherwise good or is obstructed by the receiver or his partner. </li><li>If the service is delivered when the receiving player or pair is not ready, provided that neither the receiver nor his partner attempts to strike the ball. </li><li>If, the failure to make a good service or a good return or otherwise to comply with the Laws is due to a disturbance outside the control of the player. </li></ul>If play is interrupted by the umpire or assistant umpire.<ul><li> To correct an error in the order of serving or receiving or ends. </li><li> To introduce the expedite system. </li><li> To warn or penalize a player. </li><li> Because the conditions of play are disturbed in a way which could affect the outcome of the rally. </li></ul><strong>A Point</strong>Unless the rally is a let, a player shall score the point:<ul><li>If his opponent fails to make a good service. </li><li>If his opponent fails to make a good return. </li><li>If, after he has made a good service or a good return, the ball touches anything other than the net assembly before being struck by his opponent. </li><li>If the ball passes beyond his end line without touching his court, after being struck by his opponent. </li><li>If his opponent obstructs the ball, except as provided in Rule 9.1. </li><li>If his opponent strikes the ball twice successively. </li><li>If his opponent strikes the ball with a side of the racquet blade having an illegal surface. </li><li>If his opponent, or anything he wears or carries, moves the playing surface. </li><li>If his opponent, or anything he wears or carries, touches the net assembly. </li><li>If his opponent\'s free hand touches the playing surface. </li><li>If, in doubles, his opponent strikes the ball out of sequence established by the first server and first receiver. </li><li>As provided under the expedite system. </li><li>If the umpire assesses a penalty point against his opponent. </li></ul><strong>A Game</strong><ul><li>Knockout system will be followed. </li><li>A game shall be won by the player or pair first scoring 11 points unless both players or pairs score 10 points, when the game shall be won by the first player or pair subsequently gaining a lead of 2 points. </li></ul><strong>A Match</strong><ul><li>A match shall consist of the best of any odd number of games. </li><li>Play shall be continuous throughout, except for authorized intervals. </li></ul><strong>The Choice of Ends and Serves</strong><ul><li>The choice of ends and the right to serve or receive first in a match shall be decided by lot and the winner may choose to serve or receive first or to start at a particular end. </li><li>When one player or pair has chosen to serve or receive first or to start at a particular end, the other player or pair shall have the other choice. </li><li>After each 2 points have been scored the receiving player or pair shall become the serving player or pair and so on until the end of the game, unless both players or pairs score 10 points or the expedite system is in operation, when the sequence of serving and receiving shall be the same but each player shall serve for only 1 point in turn. </li><li>In the first game of a match the pair who has the right to serve first shall decide which of them shall do so and in the first game of a match, the opposing pair shall then decide which partner will receive first. In subsequent games of a match, the first server having been chosen, the first receiver shall be the player who served to him in the preceding game. </li><li>In doubles, at each change of service the previous receiver shall become the server and the partner of the previous server shall become the receiver. </li><li>The player or pair serving first in a game shall receive first in the next game of the match, and in the last possible game of a doubles match the pair due to receive next shall change their order of receiving when first one pair scores 5 points. </li><li>The player or pair starting at one end in a game shall start at the other end in the next game of the match and in the last possible game of a match the players or pairs shall change ends when first one player or pair scores. </li></ul><strong>The Expedite System</strong><ul><li>Except where both players or pairs have scored at least 9 points, the expedite system shall come into operation if a game is unfinished after 10 minutes play or at any earlier time at the request of both players or pairs. </li><li>If the ball is in play when the game is interrupted, play shall restart with service by the player who served in the rally that was interrupted. </li><li>If the ball was not in play when the game was interrupted, play shall restart with service by the player who received service in the immediately preceding rally. </li><li>Thereafter, each player shall serve 1 point in turn. If the receiving player or pair makes thirteen successive good returns, the receiver shall score a point. </li><li>If the expedite system is introduced, or if a game lasts longer than 10 minutes, all subsequent games of the match shall be played under the expedite system. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><strong>Discipline (Advice) </strong><ul><li>In a team event, players may receive advice from anyone.<li>In an individual event, a player or pair may receive advice only from one person, designated beforehand to the umpire. If the players of a doubles pair are from different associations, each may designate an adviser. If an unauthorized person gives advice, the umpire shall hold up a red card and send him away from the playing area. </li><li>Players may receive advice only during the intervals between games, during a time-out or during other authorized suspension of play. If any authorized person gives advice at other times, the umpire shall hold up a yellow card to warn him that any further such offense will result in his dismissal from the playing area. </li><li>After a warning has been given, if in the same team match or the same match of an individual event anyone again gives advice illegally, the umpire shall hold up a red card and send him away from the playing area, whether or not he was the person warned. </li><li>In a team match, the dismissed adviser shall not be allowed to return, except when required to play, until the team match has ended. In an individual event, he shall not be allowed to return until the individual match has ended.<li>If the dismissed adviser refuses to leave or returns before the end of the match, the umpire shall suspend play and report to the referee. </li><li>These regulations shall apply only to advice on play and shall not prevent a player or captain, as appropriate, from making a legitimate appeal nor hinder a consultation with an interpreter or association representative on the explanation of a juridical decision. </li></ul><strong>Misbehaviour</strong><ul><li>Players and coaches shall refrain from conduct that may unfairly affect an opponent, offend spectators or bring the game into disrepute. Examples are: abusive language, deliberately breaking the ball or hitting it out of the playing area, kicking the table or surrounds or disrespect to match officials. </li><li>If at any time a player or coach commits a serious offence the umpire shall suspend play and report immediately to the referee. For less serious offences the umpire may, on the first occasion, hold up a yellow card and warn the offender that any further offence is liable to incur penalties. </li><li>If a player who has been warned commits a second offence in the same individual or team match, the umpire shall award one point to the player\'s opponent and after a further offence he shall award two points to his opponent, each time holding up a yellow and a red card together. </li><li>If a player against whom 3 penalty points have been awarded in the same individual or team match continues to misbehave the umpire shall suspend play and report immediately to the referee. </li><li>A warning or penalty incurred by either player of a doubles pair shall apply to the pair, but not to the non-offending player in a subsequent individual match of the same team match. At the start of a doubles match the pair shall be regarded as having incurred the higher of any warnings or penalties incurred by either player in the same team match. </li><li>If a coach who has been warned commits a further offence in the same individual or team match the umpire shall hold up a red card and send him away from the playing area until the end of the team match, or in an individual event, the end of the individual match. </li><li>The referee shall have power to disqualify a player from a match, an event, or a competition for seriously unfair or offensive behavior whether reported by the umpire or not. As he does so he shall hold up a red card. </li><li>A player who is disqualified from 2 individual matches of a team or individual event shall automatically be disqualified from that team event or individual competition. </li><li>The referee may disqualify for the remainder of a competition anyone who has twice been sent away from the playing area during that competition. </li></ul>',
        // 'rules': []
    },
    'module-31': {
        'Image Name': '11.jpg',
        'Contact': 3160053010,
        'Heads': 'Nimra Riaz',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 600,
        'Name of Module': 'Table Tennis (Girls Doubles)',
        'category': 'Sports',
        'Description': '<h3>Rules </h3><strong>The NET Assembly</strong><ul><li>The net assembly shall consist of the net, its suspension, and the supporting posts,including the clamps attaching them to the table. </li><li>The net shall be suspended by a cord attached at each end to an upright post 15.25 cm. (6 in.) high, the outside limits of the post being 15.25 cm. outside the side lines. </li><li>The net, with its suspension, along its whole length, shall be 15.25 cm. (6 in.) above the playing surface. The bottom of the net, along its whole length, shall be as close as possible to the playing surface and the ends of the net shall be as close as possible to the supporting posts. </li></ul><strong>The Racket</strong><ul><li>The racquet may be of any size, shape, or weight but the blade shall be flat and rigid. </li><li>At least 85% of the blade by thickness shall be of natural wood. An adhesive layer within the blade may be reinforced with fibrous material such as carbon fiber, glass fiber, or compressed paper but shall not be thicker than 7.5% of the total thickness or 0.35 mm, whichever is the smaller. </li><li>A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber with pimples outward having a total thickness including adhesive of not more than 2 mm. or sandwich rubber with pimples inwards or outward having a total thickness including adhesive of not more than 4 mm. </li><li>Ordinary pimpled rubber is a single layer of non-cellular rubber, natural or synthetic, with pimples evenly distributed over its surface at a density of not less than 10 per sq. cm. and not more than 50 per sq. cm. </li><li>Sandwich rubber is a single layer of cellular rubber covered with a single outer layer of ordinary pimpled rubber, the thickness of the pimpled rubber not being more than 2 mm. </li><li>The covering material shall extend up to but not beyond the limits of the blade, except that the part nearest the handle and gripped by the fingers may be left uncovered or covered with any material and may be considered part of the handle. </li><li>The blade, any layer within the blade, and any layer of covering material or adhesive shall be continuous and of even thickness. </li><li>The surface of the covering material on a side of a blade or of a side of the blade if it is left uncovered, shall be matt, bright red on one side and black on the other. </li><li>Slight deviations from uniformity of color or continuity of covering due to fading, wear, or accidental damage may be ignored provided they do not significantly change the characteristics of the surface. </li><li>At the start of a match and if he changes his racquet during a match, a player shall show his opponent and the umpire the racquet he is about to use and shall allow them to examine it. </li><li>If a player breaks his racquet during a game, he shall replace it immediately with another racquet which he has brought with him to the playing area or one which is handed to him in the playing area. A racket shall not be changed in an individual match unless it is accidentally damaged so badly that it cannot be used. If a player changes a racket during an individual match without notification, the umpire shall suspend play and report to the referee. </li><li>The covering material on a side of the blade used for striking the ball shall be of a brand and type currently approved by the USATT and shall be attached to the blade so that the trademark and ITTF logo (if applicable) are clearly visible near the edge of the striking surface. </li><li>If a player strikes the ball in play with a side of the blade whose surface does not comply with the requirements of the Rules, his opponent will be awarded a point. </li></ul><strong>Definitions</strong><ul><li>A rally is the period during which the ball is in play. </li><li>The ball is in play from the last moment at which it is stationary on the palm of the free hand before being intentionally projected in service until it touches anything other than the playing surface, the net assembly, the racquet held in the racquet hand or the racquet hand below the wrist, or until the rally is otherwise decided a let or a point. </li><li>A let is a rally of which the result is not scored. </li><li>A point is a rally of which the result is scored. </li><li>The racquet hand is the hand carrying the racquet. </li><li>The free hand is the hand not carrying the racquet. </li><li>A player strikes the ball if he touches it in play with his racquet, held in the racquet hand, or with his racquet hand below the wrist. </li><li>A player obstructs the ball if he or anything he wears or carries, touches it in play when it is traveling toward the playing surface and has not passed beyond the end line, not having touched his court since last being struck by his opponent. </li><li>The server is the player due to strike the ball first in a rally. </li><li>The receiver is the player due to strike the ball second in a rally. </li><li>The umpire is the person appointed to decide the results of each rally. </li><li>The assistant umpire is the person appointed to assist the umpire. The stroke counter is the person appointed to count strokes under the expedite system. </li><li>Anything that a player wears or carries includes anything that he was wearing or carrying at the start of the rally. </li><li>The ball shall be regarded as passing over or around the net assembly if it passes under or outside the projection of the net assembly outside the table. </li></ul><strong>Service</strong><ul><li>Service shall start with the ball resting freely on the open palm of the server\'s stationary free hand. </li><li>The server shall then project the ball near vertically upwards, without imparting spin, so that it rises as least 16 cm after leaving the palm of the free hand and then falls without touching anything before being struck. </li><li>As the ball is falling, the server shall strike it so that it touches first his court and then, passing directly over or around the net assembly touches the receiver\'s court. </li><li>In doubles the ball shall touch successively the right half court of the server and receiver. </li><li>From the start of service until it is struck, the ball shall be above the level of the playing surface and behind the server\'s end line, and it shall not be hidden from the receiver by any part of the body or clothing of the server or his doubles partner. </li><li>It is the responsibility of the player to serve so that the umpire or the assistant umpire can see that he complies with the requirements for a good service. </li><li>If there is no Assistant Umpire, and the umpire is doubtful of the legality of a service he may, on the first occasion in a match, warn the server without awarding a point. </li><li>If subsequently in the match a service by that player or his doubles partner is of dubious legality, for same reason or for any other reason, the receiver shall score a point. </li><li>Whenever there is a clear failure to comply with the requirements for a good service, no warning shall be given and the receiver shall score a point. </li><li>Exceptionally, the umpire may relax the requirements for a good service where he is satisfied that compliance is prevented by physical disability. </li><li>If, in attempting to serve, a player fails to strike the ball while it is in play, his opponent will be awarded a point. </li></ul><strong>A Good Return</strong><ul><li>The ball, having been served or returned in play, shall be struck so that it passesdirectly over or around the net assembly and touches the opponent\'s court, either directly or after touching the net assembly. </li><li>If the ball, having been served or returned in play, returns with its own impetus over the net, it may be struck so that it touches directly the opponent\'s court. </li></ul><strong>The Order of the Play</strong><ul><li>In singles, the server shall first make a good service, the receiver shall then make a good return, and thereafter, server and receiver alternately shall each make a good return. </li><li>In doubles, the server shall first make a good service, the receiver shall then make a good return, the partner of the server shall then make a good return, the partner of the receiver shall then make a good return, and thereafter, each player alternately in that sequence shall make a good return. </li></ul><strong>A LET</strong>A rally is a let:<ul><li>If in service the ball, in passing over or around the net assembly, touches it, provided the serve is otherwise good or is obstructed by the receiver or his partner. </li><li>If the service is delivered when the receiving player or pair is not ready, provided that neither the receiver nor his partner attempts to strike the ball. </li><li>If, the failure to make a good service or a good return or otherwise to comply with the Laws is due to a disturbance outside the control of the player. </li></ul>If play is interrupted by the umpire or assistant umpire.<ul><li> To correct an error in the order of serving or receiving or ends. </li><li> To introduce the expedite system. </li><li> To warn or penalize a player. </li><li> Because the conditions of play are disturbed in a way which could affect the outcome of the rally. </li></ul><strong>A Point</strong>Unless the rally is a let, a player shall score the point:<ul><li>If his opponent fails to make a good service. </li><li>If his opponent fails to make a good return. </li><li>If, after he has made a good service or a good return, the ball touches anything other than the net assembly before being struck by his opponent. </li><li>If the ball passes beyond his end line without touching his court, after being struck by his opponent. </li><li>If his opponent obstructs the ball, except as provided in Rule 9.1. </li><li>If his opponent strikes the ball twice successively. </li><li>If his opponent strikes the ball with a side of the racquet blade having an illegal surface. </li><li>If his opponent, or anything he wears or carries, moves the playing surface. </li><li>If his opponent, or anything he wears or carries, touches the net assembly. </li><li>If his opponent\'s free hand touches the playing surface. </li><li>If, in doubles, his opponent strikes the ball out of sequence established by the first server and first receiver. </li><li>As provided under the expedite system. </li><li>If the umpire assesses a penalty point against his opponent. </li></ul><strong>A Game</strong><ul><li>Knockout system will be followed. </li><li>A game shall be won by the player or pair first scoring 11 points unless both players or pairs score 10 points, when the game shall be won by the first player or pair subsequently gaining a lead of 2 points. </li></ul><strong>A Match</strong><ul><li>A match shall consist of the best of any odd number of games. </li><li>Play shall be continuous throughout, except for authorized intervals. </li></ul><strong>The Choice of Ends and Serves</strong><ul><li>The choice of ends and the right to serve or receive first in a match shall be decided by lot and the winner may choose to serve or receive first or to start at a particular end. </li><li>When one player or pair has chosen to serve or receive first or to start at a particular end, the other player or pair shall have the other choice. </li><li>After each 2 points have been scored the receiving player or pair shall become the serving player or pair and so on until the end of the game, unless both players or pairs score 10 points or the expedite system is in operation, when the sequence of serving and receiving shall be the same but each player shall serve for only 1 point in turn. </li><li>In the first game of a match the pair who has the right to serve first shall decide which of them shall do so and in the first game of a match, the opposing pair shall then decide which partner will receive first. In subsequent games of a match, the first server having been chosen, the first receiver shall be the player who served to him in the preceding game. </li><li>In doubles, at each change of service the previous receiver shall become the server and the partner of the previous server shall become the receiver. </li><li>The player or pair serving first in a game shall receive first in the next game of the match, and in the last possible game of a doubles match the pair due to receive next shall change their order of receiving when first one pair scores 5 points. </li><li>The player or pair starting at one end in a game shall start at the other end in the next game of the match and in the last possible game of a match the players or pairs shall change ends when first one player or pair scores. </li></ul><strong>The Expedite System</strong><ul><li>Except where both players or pairs have scored at least 9 points, the expedite system shall come into operation if a game is unfinished after 10 minutes play or at any earlier time at the request of both players or pairs. </li><li>If the ball is in play when the game is interrupted, play shall restart with service by the player who served in the rally that was interrupted. </li><li>If the ball was not in play when the game was interrupted, play shall restart with service by the player who received service in the immediately preceding rally. </li><li>Thereafter, each player shall serve 1 point in turn. If the receiving player or pair makes thirteen successive good returns, the receiver shall score a point. </li><li>If the expedite system is introduced, or if a game lasts longer than 10 minutes, all subsequent games of the match shall be played under the expedite system. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul><strong>Discipline (Advice) </strong><ul><li>In a team event, players may receive advice from anyone.<li>In an individual event, a player or pair may receive advice only from one person, designated beforehand to the umpire. If the players of a doubles pair are from different associations, each may designate an adviser. If an unauthorized person gives advice, the umpire shall hold up a red card and send him away from the playing area. </li><li>Players may receive advice only during the intervals between games, during a time-out or during other authorized suspension of play. If any authorized person gives advice at other times, the umpire shall hold up a yellow card to warn him that any further such offense will result in his dismissal from the playing area. </li><li>After a warning has been given, if in the same team match or the same match of an individual event anyone again gives advice illegally, the umpire shall hold up a red card and send him away from the playing area, whether or not he was the person warned. </li><li>In a team match, the dismissed adviser shall not be allowed to return, except when required to play, until the team match has ended. In an individual event, he shall not be allowed to return until the individual match has ended.<li>If the dismissed adviser refuses to leave or returns before the end of the match, the umpire shall suspend play and report to the referee. </li><li>These regulations shall apply only to advice on play and shall not prevent a player or captain, as appropriate, from making a legitimate appeal nor hinder a consultation with an interpreter or association representative on the explanation of a juridical decision. </li></ul><strong>Misbehaviour</strong><ul><li>Players and coaches shall refrain from conduct that may unfairly affect an opponent, offend spectators or bring the game into disrepute. Examples are: abusive language, deliberately breaking the ball or hitting it out of the playing area, kicking the table or surrounds or disrespect to match officials. </li><li>If at any time a player or coach commits a serious offence the umpire shall suspend play and report immediately to the referee. For less serious offences the umpire may, on the first occasion, hold up a yellow card and warn the offender that any further offence is liable to incur penalties. </li><li>If a player who has been warned commits a second offence in the same individual or team match, the umpire shall award one point to the player\'s opponent and after a further offence he shall award two points to his opponent, each time holding up a yellow and a red card together. </li><li>If a player against whom 3 penalty points have been awarded in the same individual or team match continues to misbehave the umpire shall suspend play and report immediately to the referee. </li><li>A warning or penalty incurred by either player of a doubles pair shall apply to the pair, but not to the non-offending player in a subsequent individual match of the same team match. At the start of a doubles match the pair shall be regarded as having incurred the higher of any warnings or penalties incurred by either player in the same team match. </li><li>If a coach who has been warned commits a further offence in the same individual or team match the umpire shall hold up a red card and send him away from the playing area until the end of the team match, or in an individual event, the end of the individual match. </li><li>The referee shall have power to disqualify a player from a match, an event, or a competition for seriously unfair or offensive behavior whether reported by the umpire or not. As he does so he shall hold up a red card. </li><li>A player who is disqualified from 2 individual matches of a team or individual event shall automatically be disqualified from that team event or individual competition. </li><li>The referee may disqualify for the remainder of a competition anyone who has twice been sent away from the playing area during that competition. </li></ul>',
        // 'rules': []
    },
    'module-32': {
        'Image Name': '12.jpg',
        'Contact': 3310466566,
        'Heads': 'Hamza Atiq',
        'Maximum Members': 8,
        'Minimun Members': 8,
        'Module Fee': 1500,
        'Name of Module': 'Futsal',
        'category': 'Sports',
        'Description': '<h3>Rules </h3><ul><li>Knockout system will be followed. </li><li>There will be two halves of 15 minutes each. </li><li>The squad will consist of 8 members; 5 players and 3 rolling substitutions. </li><li>Goal-keeper can pick the ball in case of back-pass. </li><li>The goal can only be scored from opposite team\'s half. </li><li>In case of a throw-in, the game will be continued by a pass. </li><li>Referees decision will be final</li><li>The team who will be late more than 15 minutes from the given time will lose the match. </li></ul>',
        // 'rules': []
    },
    'module-33': {
        'Image Name': '63.jpg',
        'Contact': 3087282420,
        'Heads': 'Umer Shehzad',
        'Maximum Members': 8,
        'Minimun Members': 8,
        'Module Fee': 3000,
        'Name of Module': 'Cricket',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Each team will have maximum of 9 players out of which 8 will play in the match. </li><li>Each inning will have 5 overs of play. </li><li>Overs bowling limit will be 2+1+1+1. </li><li>There will be super over in case of tied match. </li><li>All matches will be knockout. </li><li>Any team being 10 minutes late of given time will result in loss of that match. </li><li>A ball can be a NO BALL for several reasons: if the bowler bowls from the wrong place; or if he gives a jerk during the delivery; or if the ball bounces more than once or rolls along the ground before reaching the batsman. </li><li>The ball above the waist line will be given NO BALL. </li><li>Every No Ball will be FREE HIT. </li><li>Two bouncers will be allowed in one over, third one will be given NO BALL. </li><li>Overthrow rule will be implemented. </li><li>Bye and Leg Bye will also be considered. </li><li>LBW rule will not be applied. </li><li>Runner will be allowed if batsman is having some serious problem. </li><li>If Wicket keeper is injured, replacement player will be allowed to bat as well. (In case of keeper only) </li><li>Decision of umpire will not be over turned. </li><li>Any player found misbehaving or abusing in the field will be banned. </li>',
        // 'rules': []
    },
    'module-34': {
        'Image Name': '64.jpg',
        'Contact': 3365987990,
        'Heads': 'Uzair Aurangzeb',
        'Maximum Members': 6,
        'Minimun Members': 6,
        'Module Fee': 3000,
        'Name of Module': 'Volley Ball',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Knockout system will be followed. </li><li>6 players on the floor at any one time - 3 in the front row and 3 in the back row</li><li>Maximum of 3 hits per side</li><li>Points are made on every serve for winning team of rally (rally-point scoring). </li><li>Player may not hit the ball twice in succession. (A block is not considered a hit.) </li><li>Ball may be played off the net during a volley and on a serve. </li><li>A ball hitting a boundary line is in. </li><li>A ball is out if it hits an antenna, the floor completely outside the court, any of the net or cables outside the antennae, the referee stand or pole, the ceiling above a non-playable area. </li><li>It is legal to contact the ball with any part of a player’s body. </li><li>It is illegal to catch, hold or throw the ball. </li><li>A player cannot block or attack a serve from on or inside the 10-foot line. </li><li>After the serve, front-line players may switch positions at the net. </li><li>Matches are made up of sets; the number depends on level of play. 3-set matches are 2 sets to 25 points and a third set to 15. Each set must be won by two points. The winner is the first team to win 2 sets. 5-set matches are 4 sets to 25 points and fifth set to 15. The team must win by 2 unless tournament rules dictate otherwise. The winner is the first team to win three sets. </li><li>When serving, the player steps on or across the service line as while making contact with the ball. </li><li>Failure to serve the ball over the net successfully. </li><li>Ball-handling errors. Contacting the ball illegally (double touching, lifting, carrying, throwing, etc.)<li>Touching the net with any part of the body while the ball is in play.<li>When blocking a ball coming from the opponent’s court, it’s illegal to contact the ball when reaching over the net if both your opponent has not used 3 contacts AND they have a player there to make a play on the ball. </li><li>When attacking a ball coming from the opponent’s court, contacting the ball when reaching over the net is a violation if the ball has not yet broken the vertical plane of the net. </li><li>Crossing the court centerline with any part of your body is a violation. Exception: if it is the hand or foot. In this case, the entire hand or entire foot must cross for it to be a violation. </li><li>Serving out of rotation/order. </li><li>Back-row player blocking (deflecting a ball coming from the opponent) when, at the moment of contact, the back-row player is near the net and has part of his/her body above the top of the net. This is an illegal block. </li><li>Back-row player attacking a ball inside the front zone (the area inside the 3M/10-foot line) when, at the moment of contact, the ball is completely above the net. This is an illegal attack. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul>',
        // 'rules': []
    },
    'module-35': {
        'Image Name': '61.jpg',
        'Contact': 3334706761,
        'Heads': 'Hassan Khan',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 500,
        'Name of Module': 'Athletics (100 m)',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li><strong>Start</strong>Every 100-meter sprinter must begin the race with his feet in the starting blocks. The official race starter will call the sprinters to their blocks and on command the runners will adopt a set position. The set position requires the runners to have both feet in the blocks and adopt a position with the body weight on their hands. On the starter\'s gun all runners begin the race. < /li><li><strong>False StartA false start is called when the feet of a runner leave the starting blocks before the starter\'s gun. In youth and amateur events a false start is called by the starter or an assigned race referee. At international competitions technology to measure false starts must be in place. The IAAF website explains that a false start is ruled when the reaction time of a runner is less than 0.12 seconds after the gun. Reaction time is measured by pressure on the blocks, with 0.12 seconds being the natural time it is ruled to take for information to process from the brain to the muscles. </li > < li > < strong > LanesThe width of a lane is specified by the IAAF rules or the governing body of a 100 - meter sprint event.Any 100 - meter sprinter who leaves her lane or obstructs the path of another sprinter will be automatically disqualified from the race.Stepping on the white lines is ruled as having left your lane during the race.In these circumstances, the race referee can order the race to be run over again if it is deemed necessary. < /li><li><strong>Finish</strong > The finish is the decisive stage of the race, and is very exciting when sprinters are close to each other in terms of ability.The IAAF rules state that the time of a runner is recorded when the trunk of the body crosses the finish line.In youth and amateur 100 - meter sprint races the winner is decided by a race referee at the finish line.In international competition IAAF rules require technology to be installed to record finish times.Times are recorded and reported to .01 seconds. < /li></ul > ',
        // 'rules': []
    },
    'module-36': {
        'Image Name': '17.jpg',
        'Contact': 3324106275,
        'Heads': 'Ahmad Dar',
        'Maximum Members': 8,
        'Minimun Members': 8,
        'Module Fee': 1200,
        'Name of Module': 'Tug of War',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Knockout system will be followed. </li><li>Each team in a Tug of War competition consists of eight people. </li><li>There are various weight classifications in Tug of War, and the mass of the eight people combined must not weigh more than that determined by the category that they are placed in. </li><li>The rope used should be of a circumference of approximately 11 cm and should be marked in the middle with a centre line as well as two marks that should be placed 4m from the centre line. </li><li>At the start of the pull, the centre line of the rope should be immediately above line marked on the ground. </li><li>Both teams pull the rope, the winner being the team who manage to pull the mark on the rope closest to their opponents over the centre line. </li><li>The rope must be pulled underarm and nobody’s elbow must go below the knee, otherwise a foul will be called. </li><li>Matches are often a best of three pull, the winner winning two out of the three pulls. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li>',
        // 'rules': []
    },
    'module-37': {
        'Image Name': '16.jpg',
        'Contact': 3128666939,
        'Heads': 'Khayyam Akhtar',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 400,
        'Name of Module': 'Chess',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><strong>Basic Moves</strong><ul><li><strong>King</strong>The king moves exactly one square horizontally, vertically, or diagonally. A special move with the king known as castling is allowed only once per player, per game. </li><li><strong>Queen</strong>The queen moves any number of vacant squares in a horizontal, vertical, or diagonal direction. </li><li><strong>Knight</strong>A knight moves to the nearest square not on the same rank, file, or diagonal. (This can be thought of as moving two squares horizontally then one square vertically, or moving one square horizontally then two squares vertically—i.e. in an "L" pattern.) The knight is not blocked by other pieces unless it’s on knight’s destination: it jumps to the new location if the location is free. </li><li><strong>Rook</strong>A rook moves any number of vacant squares in a horizontal or vertical direction but not diagonally. It is also moved when castling with king. </li><li><strong>Bishop</strong>A bishop moves any number of vacant squares in any diagonal direction. Cannot move horizontally or vertically straight lines. </li><li><strong>Pawn</strong>A pawn moves one step at a time to a vacant slot vertically in front of it. If a pawn is doing its first move in the game then it has the option to move vertically two vacant steps in front of it.<br>If a pawn has an enemy one step ahead of him diagonally then it can capture it but it cannot move diagonally to a vacant slot.<br>A pawn cannot move if the slot ahead of him is blocked. A pawn cannot move backwards. A pawn is also used for promotion and en passant. </li><li><strong>Castling</strong>Castling consists of moving the king two squares towards a rook, then placing the rook on the other side of the king, adjacent to it. Castling is only permissible if all of the following conditions hold: <br><ul><li>The king and rook involved in castling must not have previously moved; </li><li>There must be no pieces between the king and the rook; </li><li>The king may not currently be in check, nor may the king pass through or end up in a square that is under attack by an enemy piece (though the rook is permitted to be under attack and to pass over an attacked square); </li><li>The king and the rook must be on the same rank</li></ul><li><li><strong>En passant</strong>When a pawn advances two squares from its original square and ends the turn adjacent to a pawn of the opponent\'s on the same rank, it may be captured by that pawn of the opponent\'s, as if it had moved only one square forward. This capture is only legal on the opponent\'s next move immediately following the first pawn\'s advance. </li><li><strong>Promotion</strong>If a player advances a pawn to its eighth rank, the pawn is then promoted (converted) to a queen, rook, bishop, or knight of the same color at the choice of the player (a queen is usually chosen). The choice is not limited to previously captured pieces. Hence it is theoretically possible for a player to have up to nine queens or up to ten rooks, bishops, or knights if all of their pawns are promoted. If the desired piece is not available, the player should call the arbiter to provide the piece. </li><li><strong>Check</strong>A king is in check when it is under attack by at least one enemy piece. A piece unable to move because it would place its own king in check (it is pinned against its own king) may still deliver check to the opposing player.<br>It is illegal to make a move that places or leaves one\'s king in check. The possible ways to get out of check are:<br><ul><li>Move the king to a square where it is not in check.</li><li>Capture the checking piece (possibly with the king). </li><li>Block the check by placing a piece between the king and the opponent\'s threatening piece. </li></ul><p>If it is not possible to get out of check, the king is checkmated and the game is over.</p><p>In informal games, it is customary to announce "check" when making a move that puts the opponent\'s king in check. However, in formal competitions check is rarely announced.</p><li><strong>Checkmate</strong>If a player\'s king is placed in check and there is no legal move that player can make to escape check, then the king is said to be checkmated, the game ends, and that player loses. Unlike other pieces, the king is never actually captured or removed from the board because checkmate ends the game. </li><li><strong>Game resigning</strong>Either player may resign at any time and their opponent wins the game. A player may resign by saying it verbally or by indicating it on their score sheet. Tipping over the king also indicates resignation, but it is not frequently used (and should be distinguished from accidentally knocking the king over). An offer of a handshake is not necessarily a resignation either, since one player could think they are agreeing to a draw. </li><li><strong>Draws</strong>The game ends in a draw if any of these conditions occur:<ul><li>The game is automatically a draw if the player to move is not in check but has no legal move, meaning that any possible move results in a check but not a checkmate. This situation is called a stalemate. </li><li>The game is immediately drawn when there is no possibility of checkmate for either side with any series of legal moves. This draw is often due to insufficient material, including the endgames<ul><li>king against king; </li><li>king against king and bishop; </li><li>king against king and knight; </li><li>king and bishop against king and bishop, with both bishops on squares of the same color. </li></ul></li><li>Both players agree to a draw after one of the players makes such an offer. </li><p>The player having the move may claim a draw by declaring that one of the following conditions exists, or by declaring an intention to make a move which will bring about one of these conditions:</p><ul><li>Fifty-move rule: There has been no capture or pawn move in the last fifty moves by each player, if the last move was not a checkmate. </li><li>Threefold repetition: The same board position has occurred three times with the same player to move and all pieces having the same rights to move, including the right to castle or capture en passant. </li></ul><p>If the claim is proven true, the game is drawn. If a player does not claim a draw according to above rules but the situation is according to the above rules, the game is automatically considered a draw since threefold repetition or fifty-move rule are eventually applicable.</p><li><strong>Time control</strong>A game played under time control will end as a loss for a player who uses up all of their allotted time. There are different types of time control. Players may have a fixed amount of time for the entire game or they may have to make a certain number of moves within a specified time. Also, a small increment of time may be added for each move made. </li><li><strong>Act of moving pieces and Touch-move rule</strong>The movement of pieces is to be done with one hand. Once the hand is taken off a piece after moving it, the move cannot be retracted unless the move is illegal. When castling, the player should first move the king with one hand and then move the rook with the same hand. </li><p>In serious play, if a player having the move touches a piece as if having the intention of moving it, then the player must move it if it can be legally moved. So long as the hand has not left the piece on a new square, any legal move can be made with the piece. If a player touches one of the opponent\'s pieces then that piece must be captured if there is a legal move that does so. If none of the touched pieces can be moved or captured there is no penalty.<br>When castling, the king must be the first piece touched. If the player touches the rook at the same time as touching the king, the player must castle with that rook if it is legal to do so.</p><li>Knockout system will be followed. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li>',
        // 'rules': []
    },
    'module-38': {
        'Image Name': '14.jpg',
        'Contact': 3201406310,
        'Heads': 'Abdullah Ahmad',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Ludo (Doubles)',
        'category': 'Non-Technical',
        'Description': '<h3>Rules </h3><ul><li>The game will be played on the bases of knockout series. </li><li>Groups will be made depends upon the number of the teams</li><li>The match will be ‘Six” a new player turns. </li><li>If, when you roll the dice and it falls off the Ludo board, it wouldn’t be considered as burnt the player who rolled it will make his turn again. </li><li>Maximum decision time would be 30 sec. </li><li>If there are 3 continuous sixes, then the numbers will be burned, and it will be next players turn however if there are 4 or greater continuous sixes then the number will counted</li><li>More details will be provided on the event day. </li><li>Rules are liable to change. </li><li>Referee’s decision will be final. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li>',
        // 'rules': []
    },
    'module-39': {
        'Image Name': '14.jpg',
        'Contact': 3201406310,
        'Heads': 'Abdullah Ahmad',
        'Maximum Members': 1,
        'Minimun Members': 1,
        'Module Fee': 300,
        'Name of Module': 'Ludo (Single)',
        'category': 'Non-Technical',
        'Description': '<h3>Rules </h3><ul><li>The game will be played on the bases of knockout series. </li><li>Groups will be made depends upon the number of the teams</li><li>The match will be ‘Six” a new player turns. </li><li>If, when you roll the dice and it falls off the Ludo board, it wouldn’t be considered as burnt the player who rolled it will make his turn again. </li><li>Maximum decision time would be 30 sec. </li><li>If there are 3 continuous sixes, then the numbers will be burned, and it will be next players turn however if there are 4 or greater continuous sixes then the number will counted</li><li>More details will be provided on the event day. </li><li>Rules are liable to change. </li><li>Referee’s decision will be final. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li>',
        // 'rules': []
    },
    'module-40': {
        'Image Name': '8.jpg',
        'Contact': 3063291827,
        'Heads': 'Tanveer Hussain',
        'Maximum Members': 8,
        'Minimun Members': 5,
        'Module Fee': 1000,
        'Name of Module': 'Basket Ball',
        'category': 'Sports',
        'Description': '<h3>Rules</h3><ul><li>Knockout system will be followed. </li><li>Only 3 layers will play for each team at a time. Two substitute players will be allowed at max. </li><li>A match will consist of four quarters (5 minutes each). </li><li>There will be 90 seconds break after each quarter and 3 minutes break at halftime. </li><li>General rules of basketball will be followed; however minor fouls can be ignored. </li><li>Any player conceding more than 3 personal fouls can be asked to leave the court by the umpire. </li><li>The game will be played in a half-court. </li><li>Referees decision will be upheld under all circumstances. </li><li>Only 8 teams will be entertained on a first come, first serve basis. So, don’t be late to register yourselves for this module. </li><li>Walkover will be granted against the team failing to reach the play venue within fifteen (15) minutes of the allocated start time. (This Rule shall be strictly implemented). </li></ul>',
        // 'rules': []
    },
    'module-41': {
        'Image Name': '38.jpg',
        'Contact': 3069860995,
        'Heads': 'Waqar ul Hassan',
        'Maximum Members': 5,
        'Minimun Members': 5,
        'Module Fee': 1500,
        'Name of Module': 'Scavenger Hunt',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>The teams perform some tasks. </li><li>The tasks may include videos and pictures that are again both technical and fun oriented. </li><li>Collection of some stuff can also be included in this round. </li><li>Time limit for this round will be upto 3 hours. After this , the teams will be credited on the number of tasks they have completed. </li></ul><h4>Judgement Criterion </h4>No of tasks completed and time taken to complete the task.',
        // 'rules': []
    },
    'module-42': {
        'Image Name': '35.jpg',
        'Contact': 3355786231,
        'Heads': 'Waleed Akhtar',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 550,
        'Name of Module': 'Minute to Win it',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ol><li>Rules of this module will be revealed on spot. </li><li>You will be given different task and you have to complete it in a minute. </li><li>Each team consists of two members. </li></ol>',
        // 'rules': []
    },
    'module-43': {
        'Image Name': '40.jpg',
        'Contact': 3365400794,
        'Heads': 'Abdullah Jawad',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 550,
        'Name of Module': 'Battle of Theetas',
        'category': 'Technical',
        'Description': 'Battle of Thetaas consists of two rounds:<ol><li>General Knowledge </li><li>Rapid Fire </li></ol><h3>Rules</h3><ol><li>General Knowledge<ul><li>This is a contest based on the general knowledge </li><li>A maximum number of members is two. </li><li>There will be a quiz in which you will be asked a certain number of questions. </li></ul></li><li>Rapid Fire<ul><li>In time of total 90 seconds, different questions will be asked by the organizer. </li><li>There would be no negative marking. </li><li>Team having maximum answers right will get maximum marks. </li></ul></li></ol>',
        // 'rules': []
    },
    'module-44': {
        'Image Name': '36.jpg',
        'Contact': 3366206043,
        'Heads': 'Tauqeer Nasir',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Antakshiri',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>Rules of this module will be revealed on spot. There will be three rounds and in each round your passion and knowledge of songs and their singers will be tested. </li><li>Each team consists of two members. </li></ul>',
        // 'rules': []
    },
    'module-45': {
        'Image Name': '39.jpg',
        'Contact': 3344243719,
        'Heads': 'Talha Jabbar',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Blue Book',
        'category': 'Technical',
        'Description': '<p>This is the time to test your scientific knowledge. Bluebook contains all the scientific knowledge you’ve been learning from your secondary school. </p>The module is divided into 2 rounds:<h4>Round 1</h4><ul><li>Teams are required to guess the personality and the invention while being provided with the hint. </li><li>There are going to be 2 obvious and 2 non-obvious hints, the more hints the team demands the fewer marks it gets for the successful guess. This round also contains the science version of dumb charades in which one of the members of theteam has to communicate with his/her other team members the name of the invention or scientist name without using the vocals. </li></ul><h4>Round 2</h4>Each team has to answer as many questions as possible before other teams do. <h3>Rules</h3><ol><li>A team should consist of 2 members. </li><li>Teams have to answer the questions within limited time span </li><li>Bluebook will have no elimination. The fight for the first place will continue until the last round. </li></ol>',
        // 'rules': []
    },
    'module-46': {
        'Image Name': '41.jpg',
        'Contact': 3328001551,
        'Heads': 'Abdullah Bajwa',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Mind Melting',
        'category': 'Technical',
        'Description': '<p>Mind-Melting is a competition for testing your knowledge related purely to the Mechanical Engineering.</p><h3>Rules</h3><ol><li>A team can have amaximum of 2 members. </li><li>The registration fee of a team is 500 PKR. </li><li>Mind-melting will consist of 3 rounds as follows: <h4>Evaporation</h4><p>It will be MCQs based round in which all the teams will be given 20 MCQs related to various concepts of Mechanical Engineering, which they have to solve in 20 minutes’ time. (No negative marking). </p><h4>Turbulence</h4><p>In this round, each team will be called one by one and has to answer the questions asked. Time to answer each question will be 30 secs. (No negative marking). </p><h4>Change of State</h4><p>In this round, each team will be given an option to choose their area of interest and answer the questions related to their field of Expertise. 3 questions will be asked and failing answer the question will result in negative marking. </p>Following are the areas of interest:<ol><li>Automotive</li><li>Aerodynamics</li><li>Fluid mechanics</li><li>Thermodynamics</li><li>Heat and Mass transfer</li><li>Materials</li><li>Mechanics</li></ol></li></ol>Note: The decision of the Jury will be final. Making unnecessary remarks or answering the questions of other teams will result in disqualification.',
        // 'rules': []
    },
    'module-47': {
        'Image Name': '42.jpg',
        'Contact': 3332520949,
        'Heads': 'Humair Abbas',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Leibniz of Pakistan',
        'category': 'Technical',
        'Description': '<h3>Rules</h3><ol><li>Each team will have 2 members max. </li><li>Each team will be given a time of 60 minutes to solve a paper-based test. </li><li>All pencil cases, turned off cell phones, laptops and other unauthorized aids as well as bags should be stored inside each participant’s  bag, which should then be closed securely and placed under his/her chair. </li><li>Calculators won’t be allowed. </li><li>Candidates are not allowed to have a pencil case on their desk. Pens will be provided to each team. </li><li>No extra time will be given. </li></ol>',
        // 'rules': []
    },
    'module-48': {
        'Image Name': '58.jpg',
        'Contact': 3467208835,
        'Heads': 'Talha Bilal',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Web Design Competition',
        'category': 'Technical',
        'Description': '<p>Participants will be given a theme and a scenario and they have to design a website according to that theme and scenario.<p><h3>Rules</h3><ul><li>Each team will have 2 participants. </li><li>The best design will be the winner and it will be judged by a judge from the faculty. </li><li>The participants are allowed to use any frontend framework (e.g. Angular, React, Vue etc) and any CSS framework (e.g. Materialize, Bootstrap, Bulma etc). </li><li>The competition is strictly for frontend development and any usage of backend technologies is not allowed. </li><li>Maximum Time provided will be 2 hours. </li><li>Each team will be provided with a PC, a pencil and a paper. </li>',
        // 'rules': []
    },
    'module-49': {
        'Image Name': '65.jpg',
        'Contact': 3439555320,
        'Heads': 'Hassan Sattar',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Krypto',
        'category': 'Technical',
        'Description': '<p>Krypto is a module to introduce the art of cryptography to the next generation of brilliant minds. This module focuses on working with cryptic texts and puzzles in an interesting, challenging yet in a fun and amusing way. Krypto at its core is designed as a competitive race against time. Each will be challenged to decrypt different kind of cryptic puzzles that blends the digital world along with the real world environment, gaining points with each successful decryption.</p><h3>Guidelines to be followed:</h3><ul><li>Each team will have 2 participants.</li><li>The game will start at 10 am till 5 pm inclusive of break and work. </li><li>Per team a puzzle book will be distributed among all the teams. </li><li>QR-code reader must be installed in the mobiles. </li><li>A map will be provided to show the parameters and locations of QR-codes. </li><li>The algorithms that are going to be used in this module will be disclosed on the day of the competition (Saturday). </li></ul><h3>Winning Criteria:</h3><ul><li>After 5 pm, the team with highest points will be the winning team. </li><li>Clear all the levels of Krypto by 5pm and submit the results before all the other teams. </li><li>In case two or more teams achieve equal scores, then the final decision will be made on the basis of submission time. </li></ul>',
        // 'rules': []
    },
    'module-50': {
        'Image Name': '22.jpg',
        'Contact': 3349402887,
        'Heads': 'Usman Imtiaz',
        'Maximum Members': 3,
        'Minimun Members': 2,
        'Module Fee': 500,
        'Name of Module': 'Code Frenzy',
        'category': 'Technical',
        'Description': '<p>The participants will be given a set of programming puzzles and problems that they have to solve.</p><h3>Rules</h3><ul><li>Only C++ is allowed for solving programming problems.</li><li>Each team will have 2 to 3 participants. </li><li>The team who solve the highest number of problems will win. </li><li>Teams will use the PCs in CC. Internet usage is not allowed. </li><li>Maximum Time provided will be 2 hours. </li><li>Each team will be provided with a PC, a pencil and a paper. </li>',
        // 'rules': []
    },
    'module-51': {
        'Image Name': '19.jpg',
        'Contact': 3366760860,
        'Heads': 'Sumama Masood',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 600,
        'Name of Module': 'Swift Wiring',
        'category': 'Technical',
        'Description': '<p>In electronics, one of the key parts of thepractical implementation of theproject is to implement the circuit on abreadboard. So, this competition is arranged to test your skills to implement the circuits efficiently.If you think you are good enough in theimplementation of circuits efficiently, then this module of PiON’19 is the best opportunity to prove your skills.</p><h3>Rules</h3><ul><li>There willl be maximum of 2 members per team. </li><li>This competition will test the skills of circuit optimization, neatness and speed of wiring a circuit. </li><li>The competition will be comprised of two rounds. </li><li>In the first round,you may be provided with the circuit diagram.You may be given some questions or problems to solve. </li><li>Time for the implementation of circuit matters.You must complete Your task within 30-35 minutes. </li><li>The team that answers all asked questions and completes the implementation of thecircuit will qualify for the next round. </li><li>In the second round, there will be more complex wiring and might include systems that revolve around daily life applications. </li><li>The organizing team will replace the components if you think that any circuit component such as an Integrated Circuit (IC) is not working properly but organizing team will not be responsible for theimproper functioning of any circuit component. Any helping material found and any cheating will lead to disqualification from the competition.These rules and regulations are subjected to change without any prior notice and final decision lies in the hands of the organizingcommittee. </li></ul><h3>Judgement Criterion</h3><ul><li>The team which will score most points by the end of given time span will be declared awinner. </li><li>Points will be assigned on abinary basis.If a circuit works fully then team will be awarded with full marks, no middle numbers will be provided. </li><li>The team who would have done the tasks earlier will be declared awinner in case of tie There will be no winner in this module if none of the team completes even a single task in the provided time. </li></ul>',
        // 'rules': []
    },
    'module-52': {
        'Image Name': '21.jpg',
        'Contact': 3314514100,
        'Heads': 'M UbaidUllah',
        'Maximum Members': 5,
        'Minimun Members': 3,
        'Module Fee': 1000,
        'Name of Module': 'Project Exhibition',
        'category': 'Technical',
        'Description': '<p>Project exhibition is a perfect opportunity for you to bring forth your innovative ideas and to move further out from the textbooks and indulge yourselves practically in the field of science.</p><h3>Rules</h3><ul><li>A single team should consist of 3-5 members. </li><li>The project can relate to any general science field i.e. Physics, Chemistry, Biology, Computer</li><li>You should be having a panaflex demonstrating key features of your project. </li></ul>',
        // 'rules': []
    },
    'module-53': {
        'Image Name': '20.jpg',
        'Contact': 3341541549,
        'Heads': 'Sarmad Salman',
        'Maximum Members': 5,
        'Minimun Members': 3,
        'Module Fee': 1000,
        'Name of Module': 'Think Holmes',
        'category': 'Non-Technical',
        'Description': '<p>Have you ever seen those Detective TV series and movies and wished you could be a part of that? Well, look no further as we give you a taste of real life crime detecting. You will be given a case and use your detective skills you will be required to solve the case. Unravel the mystery, solve the unsolvable and be a crime-detecting hero. <br>We have numerous puzzles, riddles and challenges to solve and get through to solve the case. Is it a murder case? Is it suicide? What’s the motive behind such actions? Who are the suspects and ultimately who is the killer? We will provide you with the questions and you will provide us with the answers! You will be asked to examine crime scenes, Find clues, perform various tests, Interrogate suspects, discover the motives, locate new allies, collide with rivals and ultimately find the killer. The entire event will take place in rounds of three. With the first being the investigation of the victim, crime scene and all clues. The second will be interrogating the suspects and deducting facts you think could be the reasons and motives for the murder or make the killer confess themselves of the crime!(if you’re that good). And the third round will ask you to present all your findings and give us clear and logical reports of who you think is the culprit and why?<br>There will be no elimination of teams. This is not a race. Only the cool and calm will win. Make the best report and at the given time give us your report. Whoever has the best report will be announced the winner!<br>Think you have what it takes? Well sign up and let your inner Sherlock come through. Or is it just too much for you to handle….</p><h3>Rules</h3><ul><li>Each team will be given about 4 minutes to examine the crime scene. </li><li>Each team can consist of 3-5 members. </li><li>You will be allowed to interrogate each suspect three times and only be allowed to ask 5(can be varied) questions in every session. Asking of more questions or interrogating the suspect beyond the limit of 3 times will result in apenalty. </li><li>You are required to write a comprehensive report on the entire case. How did the murder take place, what was the motive behind it, how did you rule out suspects and eventually who was the killer and why? The more detailed your report is the more chance of scoring high marks </li><li>Your evidence could be photographed or hand-written. It’s up to you how you handle your evidence to find the suspect. </li><li>Crime scene will contain evidence which would require you to do lab tests on them. Always look for the little clues because it’s the little clues that make the difference in the end. All proper equipment will be given to you to carry out those tests. </li></ul>',
        // 'rules': []
    },
    'module-54': {
        'Image Name': '24.jpg',
        'Contact': 3076589023,
        'Heads': 'Umair Asghar',
        'Maximum Members': 4,
        'Minimun Members': 3,
        'Module Fee': 500,
        'Name of Module': 'Astromania',
        'category': 'Technical',
        'Description': '<p>Astrophysics or The Science of Space ,whether be stars, exo-planets, galaxies, black holes or extraterrestrial life, name it and astrophysics covers it. For three days of astromania, we will have a heated auction for eight companies, a challenging crisis and finally a presentation to mark the end of the event, leaving you as ASTROMANIACS. </p><h3>Rules</h3><ul><li>Eight teams will participate in this event, which will be named after companies later. </li> <li>Each team will have 3 to 4 members </li><li>In round 1, interviews will be held individually for each team by apanel of judges. </li><li>Teams will be given points for their confidence level and their knowledge about astrophysics and would be given companies according to their points in round 1. </li><li> President and director of NASA will address companies. They will tell the companies about the crisis and will give a briefing about the situation. Short line and layout will be handed over to the teams to study. </li><li>Companies will be given updates and they will work out their plan and submit it to director NASA. </li><li>In round 2, workout plan will be presented</li><li>To president and presentation will be given to them by companies, in that round points will be marked according to the convincing power of plan and presentation plus ideas. </li><li>Total points for all two rounds will collectively help in deciding a winner. </li><li>Astromania will have no elimination.The fight for the first place will continue till the last round. </li></ul>',
        // 'rules': []
    },
    'module-55': {
        'Image Name': '23.jpg',
        'Contact': 3030133677,
        'Heads': 'Waleed Naeem',
        'Maximum Members': 5,
        'Minimun Members': 3,
        'Module Fee': 1000,
        'Name of Module': 'Rube Goldberg machine',
        'category': 'Technical',
        'Description': '<h3>Rules</h3><ul><li>A single team should consist of 3-5 members. </li><li>You have to complete your tasks in given time. </li><li>Build RGM from the logistics provided to you by the organizing committee but you can bring 5 logistics of your own choice.  </li><li>Points will be awarded on the basis of creativity, number of steps and total time taken</li><li>There should be at least 4 number of steps. </li></ul>',
        // 'rules': []
    },
    'module-56': {
        'Image Name': '18.jpg',
        'Contact': 3374683378,
        'Heads': 'Qasim Zafar',
        'Maximum Members': 6,
        'Minimun Members': 1,
        'Module Fee': 2000,
        'Name of Module': 'Roboate',
        'category': 'Technical',
        'Description': '<h3>Rules</h3><ul><li>There will be white shiny line (3cm width) on black background. </li><li>Maximum dimension of the robot should be 30*30*30 cm. </li><li>H-bridge ICs or motor controllers can be used. </li><li>Robot should be autonomous i.e. during competition robot cannot communicate with any device that is not attached to robot itself. </li><li>Robot should be powered by onboard power source and that must not exceed 24 Volts. </li><li>Map for testing robot will be revealed 4 hours prior to the competition. </li><li>Hard Coding of the robot is not allowed, otherwise it would lead to the disqualification of the team. </li><li>There would be three rounds. </li><li>In round one, 3 restarts will be allowed. (Restart mean team members physically touching the robot) </li><li>In case of restart the robot will start from starting line. </li><li>Robots passing through round one will go to round two where robots will follow line in reverse direction. </li><li>Passing through round one and two, the robots will go to round three where points will be awarded on the basis of time took to cover the track. </li><li>Each team may consist of maximum 5 members. </li><li>The decision of the judges will be final. </li></ul>',
        // 'rules': []
    },
    'module-57': {
        'Image Name': '59.jpg',
        'Contact': 3366995554,
        'Heads': 'Nimra Anjum',
        'Maximum Members': 6,
        'Minimun Members': 1,
        'Module Fee': 2000,
        'Name of Module': 'Robo Maze',
        'category': 'Technical',
        'Description': '<p>Robo maze is a competition in which a robot navigates out of the maze in the quickest time possible and can collect maximum number of points from the designated starting point to ending point. </p><h3>Arena Description </h3><ul><li>The blocks are separated by walls having constant thickness. </li><li>Each block is numbered in the same order as shown in figure.<br><img src="images/prs-module.png" alt="Robo Maze Figure" width="256px; height: auto;"></li><li>The starting block, the exit block and the routes can be changed during the competition. </li><li>Each block is 50 cm x 50 cm in size. </li><li>The wall width is 5 cm. </li><li>The wall height is 20 cm. </li><li>The maze size is 6 x 6, with a total of 36 blocks. </li><li>There will be a total of three rounds. </li></ul><h3>Robot Specifications</h3><ul><li>Dimensions: 30 cm x 30 cm</li><li>Bluetooth/ Wi-Fi for wireless communication</li><li>Battery and power supply module</li><li>Proximity sensors 9 </li><li>Color sensor for floor color detection</li><li>Microcontroller</li><li>Buzzer</li><li>H-Bridge module</li></ul><h3>Rules</h3><ul><li>Robot Control: Autonomous </li><li>A Robot shall be self-contained (no remote controls). </li><li>A Robot shall not jump over, fly over, climb, scratch, cut, burn, mark, damage, or destroy the walls of the maze. </li><li>A Robot shall not be larger either in length or in width, than 30 cm. </li><li>Any violation of these rules will constitute immediate disqualification from the contest and ineligibility for the associated prizes. </li><li>The judges reserve the right to ask the operator for an explanation of the Robot. </li><li>The judges also reserve the right to stop a run, declare disqualification, or give instructions as appropriate (e.g., if the structure of the maze is jeopardized by continuing operation of the robot. </li></ul><h3>Rounds</h3><p>There will be three rounds</p><strong>Preliminary trial</strong><ul><li>Each contesting Robot is not allocated any time to access the maze prior to their first run. </li><li>Robots can have three runs. </li><li>Contestants have 15 minutes in total. </li><li>Any time used to adjust a robot between runs is included in the 15 minutes. </li><li>Each run (from the start cell to the center zone) in which a robot successfully reaches the destination square is given a run time. </li><li>The minimum run time shall be the robot\'s official time.  </li><li>Two timers are used for each contestant. </li><li>One for the fifteen-minute total time, and a separate timer for each run within the total time. </li><li>Scoring will be based on minimum run time. </li><li>Max points: 50</li></ul><strong>Get to destination: </strong><ul><li>Each contesting robot have to reach the destination (start to end block). </li><li>Only maximum of 3 hits at wall are allowed, and any extra 10 hit will have negative marking of -5. </li><li>The participant will be judged upon crossing certain marks and completion of the maze. </li><li>Max points:100</li></ul><strong>Find the colored box: </strong><ul><li>Robot has to find two colored boxes (purple and yellow). </li><li>Each contesting robot must find a colored box and stay there for five seconds before it moves to the next box. </li><li>The timer would stop when the robot reaches the second colored box. </li><li>Initial position of the box could be anywhere. </li><li>The participant will be judged upon crossing certain marks. </li><li>Max points:150</li></ul>',
        // 'rules': []
    },
    'module-58': {
        'Image Name': '60.jpg',
        'Contact': 3359072049,
        'Heads': 'Shaheer Farooq',
        'Maximum Members': 6,
        'Minimun Members': 1,
        'Module Fee': 2000,
        'Name of Module': 'Robo Race',
        'category': 'Technical',
        'Description': '<p>Test you driving skills and robotics Knowledge by constructing the best RC racing car and competing with the blazing racers in Pakistan. Get ready to be the Part of the most dramatic and thrilling Event of RoboRace on PION’19. </p><h3>Rules</h3><ul><li>The maximum weight (including battery) of your car cannot exceed 2500g. (critical) </li><li>The maximum length of your car cannot exceed 475mm from front to back. (critical) </li><li>The maximum width of car cannot exceed 350mm. (critical) </li><li>The maximum height of your car cannot exceed 260mm. (critical) </li><li>There is no restriction on the type of material used, but it should be structurally adequate not to pose a safety hazard.  </li><li>Chassis: Any off-road 4-wheel drive buggy style chassis. </li><li>Batteries: 6-cell NiMH batteries, or 2-cell hard case Li-Poly batteries.  </li><li>Tires: Any wheel with rubber tires and should be OFF-ROAD. </li><li>Bodies must be secure or else the car will be pulled off the track </li>	<li>Electric cars only </li>	<li>No monster trucks </li>	<li>Reverse is ALLOWED. </li> 	<li>All cars must be inspected before the race or you will be disqualified. </li>	<li>Minimum 1 and Max can be of a 4-person team. </li>	<li>Must use the same car through the heats, semis, and finals </li>	<li>Drivers can not touch the car during race </li>	<li>All controllers must be Marked and turned in promptly at the end of each race unless authorized by the race officials. </li>	<li>You must have two frequencies to choose from minimum. </li>	<li>Any Driver who is driving reckless and is considered unsafe will be warned once and the second time can be pulled off the track</li>	<li>The racing surface can be changed anytime depending on the weathers </li></ul><strong>Note</strong><ul><li>Judges reserve the right to eliminate any team based on given rules.</li><li>In all matters of interpreting the rules before and during the contest and in any issues not covered by these rules, the decisions of the judging committee will be final.</li></ul>',
        // 'rules': []
    },
    'module-59': {
        'Image Name': '62.jpg',
        'Contact': 3315811454,
        'Heads': 'Fakhar fatima',
        'Maximum Members': 4,
        'Minimun Members': 1,
        'Module Fee': 1000,
        'Name of Module': 'Alpha Arduino',
        'category': 'Technical',
        'Description': '<p>An Arduino based programming competition</p><h3>Rules</h3><ul><li>Each team can have maximum 4 members. </li><li>PCs with Arduino will be provided by the management team. </li><li>Five problems will be given to each team. </li><li>In round 1 the team implementing the solutions in minimum time will win. </li><li>In round 2, one problem will be given and team implementing the most efficient solution will win</li>',
        // 'rules': []
    },
    'module-60': {
        'Image Name': '32.jpg',
        'Contact': 3318943396,
        'Heads': 'Inaam Ullah',
        'Maximum Members': 3,
        'Minimun Members': 2,
        'Module Fee': 1000,
        'Name of Module': 'PLAN IT',
        'category': 'Non-Technical',
        'Description': '<p>Plan It seeks to develop entrepreneurial and problem-solving skills in the students at higher education level by igniting creativity to plan something beneficial for thesociety or public, as teams will solve a big real-world problem giver-non-spot, create a plan and later pitch it in front of the jury. </p><h3>Module Timeline</h3><strong>Introductory Session 1</strong><p>An introductory session will be arranged for the participants on Saturday 6th March, 2018. The purpose of this session is to guide the participants on Do\'s and Don\'ts and give them a detailed outline for the upcoming round. <p><strong>Round 1: Planning</strong><p>Round 1 will begin right after the introductory session. Each team willbe asked to give a solution to the "Big Problem" provided here on the spot. Different problems will be asked for the same industry/general category/Business and teams will be able to choose anyone based on their interests. The problems will be well defined and from everydayexperience, so any prior experience in entrepreneurship or else is not required. Teams will be given a time of 1 day for planning and will be required to submit, before the beginning Of Round 2, about theone-page plan of their solution containing details such as basic idea, thepracticality of solution, targeted audience, level of engagement Of audience, and achievable goals within the solution. For the convenience of the teams, a sample problem and its solution will be made available at least 7 days before the participation date to get an idea about the procedure to be followed.</p><strong>Introductory Session 2</strong><p>The final introductory session will take place on 7th April 2018. The purpose of which is to introduce teams to of pitching, which is included in planning to make the contestants able to clarify their ideas and practice conciseness while planning. Sample Pitches will also be presented to let participants get a clear idea of do\'s and don\'ts of this proceeding. The One-page plan will be submitted here and only submitting teams will get to pitch in the next round. </p><strong>Round 2: Pitching </strong><p>After the introductory Session, teams will get to prepare their pitches thoroughly in a time Of 40 minutes. After which, one member of each team will plan orally for 2 minutes before the judges and audience. Oral Pitch must include the big problem and your solution to it i.e. your idea, its practicality and the benefit it gives, your target audience and lastly the "Big Impact" it will make if implemented. A cash prize will be given to the winning team. Participation certificates for all team members shall also be distributed. </p><h3>Rules</h3><ul><li>Each Team will consist of 2-3 members. </li><li>1t is mandatory for participants to attend the introductory session. Failure to attend will result in immediate disqualification. </li><li>Additional research may be needed on part Of earn in planning for which internet connections will be made available. Personal internet connections and laptops are also permitted. </li><li>NO delays beyond the round deadlines will be tolerated at all. Late submissions will not be allowed to compete. </li><li>Only a single idea shall be pitched by each team. If a team comes up with multiple ideas, it is required to scrutinize all others to one. </li><li>Use of electronic media for pitch is not allowed. </li><li>Each team will be asked to solve the same set of problems. Professional ethics demand that competitors DO NOT discuss or reveal the topic till they pitch it. Competitors who violate this ethical standard will be penalized. </li><li>Teams will be judged based on their overall plan and the pitch. The plan will be judged On the basis of theidea, its practicality, the big change it makes and clarity of the plan; further, understanding of the problem and the evidence of teamwork will contribute to the score. Pitch will be judged on the basis Of organization, delivery and quality. </li><li>A 60% weight age shall be given to the one-page Plan and 40% to the pitch. </li>	<li>The decision of judges will be final. </li>	<li> Use of offensive remarks about other competitors during the pitch or anytime during the planning will cause severe penalty. A gentle degree of formality and professionalism is expected in the behaviours of teams. </li></ul><h4>Note</h4><p>The one-page plan is hot a general business plan but purposes to be an overall view of the ideation and planning. The teams will be required to keep a copy of the plan for themselves to help them laying out the pitch outline </p>',
        // 'rules': []
    },
    'module-61': {
        'Image Name': '66.jpg',
        'Contact': 3377255904,
        'Heads': 'Muhammad Aqib',
        'Maximum Members': 2,
        'Minimun Members': 2,
        'Module Fee': 400,
        'Name of Module': 'Bait Baazi',
        'category': 'Non-Technical',
        'Description': '<h3>Rules</h3><ul><li>Each team will consist of two participants.</li><li>All teams must keep in mind the ethical and moral values while selecting the couplets. The couplet once recited should not be repeated.</li><li>Discussion of judges would be final.</li><li>Nazm verses are not allowed to be recited.</li><li>Not more than two verses of Ghazal are allowed to be recited.</li><li>Attack of \'Radeef\' s prohibited.</li><li>The criteria of judgement will be based upon:</li><li>Behr/Wazan</li><li>Presentation and pronunciation</li><li>Quality of thoughts</li></ul>',
        // 'rules': []
    },
};

var TEAMS_DATA = {
    'website': {
        'coordinators': ['ali nauroze', 'moazin khatri'],
        'heads': ['abdul rehman khan', 'hassan sattar'],
        'members': ['ahsan mukhtar', 'aroosha pervaiz', 'hassan askary', 'mishal fatima', 'muhammad mohad', 'shaharyar sajid', 'talha amjad', 'talha bilal', 'urwah bin aamer', 'zain rehman', 'zubair khan']
    },
    'management': {
        'coordinators': ['muneeb ur rehman'],
        'heads': ['dawood mazhar', 'khan salik najeeb', 'daud shafqat'],
        'members': ['aamir abbas', 'aamna khan', 'abdul hannan', 'abdul moeez', 'abdul rafay', 'abdul samad', 'ahmad dar', 'ahmad hassan', 'ahmad hussain', 'ahmad kamal baig', 'aleena ajaz', 'ali amin', 'ali hassan', 'aneela riaz', 'aqsa mushtaq', 'asif mahmood', 'ayatullah', 'ayesha salar', 'bibi ayesha', 'bilal ahmad', 'emaan zahra', 'faiz ahmed', 'fareed hussain', 'fasih shaukat', 'hajrah rameen', 'hammad ali', 'hassan abbas', 'hassan askary', 'huzaifa nadeem', 'inaam ullah', 'iqra ayesha', 'kamla bibi', 'kashif munir', 'khan salik najeeb', 'khaz ahmed', 'm. haider khan', 'm. mouaaz ranjha', 'maham ibrar', 'mehwish israr', 'minahil zafar', 'mir hamza', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullah ansari', 'muhammad ahmad', 'mohammad ahmad bashir', 'muhammad ali', 'muhammad arfat amir', 'muhammad aslam', 'muhammad azeem sarwar', 'muhammad ehtisham', 'muhammad furqan', 'muhammad haseeb hashim', 'muhammad hassaan', 'muhammad hassan', 'muhammad haziq', 'muhammad hunzilah', 'muhammad inaam elahi', 'muhammad mohad', 'muhammad taha nasir', 'muhammad talha', 'muhammad umair aziz', 'umair ismail', 'muhammad zeeshan', 'muhammed bilal', 'musfirah ehsan', 'nimra riaz', 'rabiyya mir', 'rao usama', 'sadaf rehmat', 'saeed ahmad', 'saifullah', 'samavia jaffery', 'saqib shahzad', 'shams ul hassan', 'shan yousaf', 'sheikh nauman ahmed', 'sijil jehangir', 'sonia ahmad khan', 'sukaina najm', 'syed fahad ullah', 'syed qasim raza', 'taimoor ahmad khan', 'tanveer hussain', 'umar asif', 'umar tariq', 'umer farooq', 'urwah bin aamer', 'usama shahid', 'warda tu zahra', 'zoha assad', 'zubair khan', 'zunair malik']
    },
    'liaison': {
        'coordinators': ['muhammad humzah zaffar'],
        'heads': ['muhammad obaidullah', 'rabiyya mir'],
        'members': ['abdul hannan', 'abdul moeez', 'abdul rehman', 'abdur rehman shamsi', 'ahmed dar', 'ali amin', 'ali hassan', 'asma mohsin', 'ayesha mannan', 'dilawaiz', 'emaan zahra', 'faizan ahmad', 'furqan shaikh', 'hajrah rameen', 'hamza irshad', 'huzaifa nadeem', 'ihtisham muhammad', 'isra imran', 'junaid rehman', 'kamla bibi', 'khaz ahmed', 'maham ibrar', 'mishal fatima', 'mohammad hisham raja', 'mohammad hussain', 'muhammad abdullh jawwad', 'mohammad ahmad bashir', 'muhammad arfat amir', 'muhammad dawood bashir', 'muhammad faisal azam', 'muhammad fakhar', 'muhammad hassaan', 'muhammad hassan khan', 'muhammad haziq', 'muhammad sheraz aamir', 'umair iftikhar', 'muhammad waleed naeem', 'muhammed bilal', 'osama khalid', 'samavia jaffery', 'siddiqua farooq', 'sumama masood', 'syed afnan gillani', 'syed muhammad haider abbas', 'syed qasim raza', 'umer farooq', 'waleed umer', 'hamza atiq', 'aamir abbas', 'iqra ayesha', 'muhammad ahmad', 'muhammad aslam', 'muhammad ehtisham', 'umair ismail', 'shams ul hassan', 'sonia ahmad khan', 'ammar mukhtar']
    },
    'guest protocol': {
        'coordinators': ['abdul wahab nasir', 'maham saeed'],
        'heads': ['muhammad dawood bashir', 'warda tu zahra'],
        'members': ['abdul ahad', 'mehwish israr', 'ahmad kamal baig', 'aleena ajaz', 'amina tabassum', 'ayesha salar', 'hammad ali', 'kashif munir', 'm. haider khan', 'mir hamza', 'ashhab khan', 'muhammad azeem sarwar', 'muhammad farrukh irfan', 'muhammad furqan', 'muhammad umair aziz', 'muhammad waleed naeem', 'muhammad zakki sohail', 'nimra riaz', 'ruhma khan', 'saleha mushtaq', 'shazil anjum', 'sukaina najm', 'syed afnan gillani', 'syed fahad ullah', 'umar tariq', 'umer husnain', 'uswa fatima', 'zain ul hassan', 'zoha assad']
    },
    'videography': {
        'coordinators': ['nabeel ahmed'],
        'heads': ['moeeze hassan', 'shayan khawar'],
        'members': ['aamna khan', 'ahmed abdullah', 'anas zohrab', 'asif mahmood', 'dilawaiz', 'fakhar fatima', 'humair abbas', 'muhammad hassaan', 'muhammad usman khalid', 'sarmad salman', 'umair shaffi']
    },
    'marketing & promotion': {
        'coordinators': ['ahsan mukhtar'],
        'heads': ['ali raza', 'junaid rehman'],
        'members': ['ahmad ghufran', 'ajmal shahzad', 'moeeze hassan', 'muhammad adil', 'nabeel ahmed', 'muhammad hassan khan', 'muhammad hunzilah', 'usama shahid', 'muhammad fakhar', 'anas zohrab', 'hassan askary', 'mubashir ali', 'abdul wahab nasir', 'hamza tahir', 'ammar mukhtar']
    },
    'security': {
        'coordinators': ['abdul ahad'],
        'heads': ['aamir abbas', 'waleed akhtar'],
        'members': ['aroosha pervaiz', 'abdur rehman', 'ashhab khan', 'muhammad abdullah ansari', 'umar shahzad', 'asad ali', 'hamza atiq', 'faiz ahmed', 'fareed hussain', 'tanveer hussain', 'abdullah ahmad', 'muhammad zeeshan', 'muhammad sabeeh', 'usama shahid', 'osama khalid', 'muhammad farrukh irfan', 'muhammad haseeb hashim', 'ihtisham muhammad']
    },
    'messing': {
        'coordinators': ['assad sultan'],
        'heads': ['shaheer farooq', 'inaam ullah'],
        'members': ['abdur rehman', 'ahmad hassan', 'muhammad sabeeh', 'umar asif', 'mohammad sanaullah', 'khan salik najeeb', 'm. haider khan', 'muhammad abdullah ansari', 'muhammad azeem sarwar', 'muhammad umair aziz', 'ashhab khan', 'ayesha mannan', 'hajrah rameen', 'tooba maryam', 'uswa fatima']
    },
    'photography': {
        'coordinators': ['ayesha ali'],
        'heads': ['sarmad salman', 'bilal ahmad'],
        'members': ['aamna khan', 'abdul samad', 'adil tiwana', 'ahmed abdullah', 'ayesha mannan', 'fakhar fatima', 'hamza irshad', 'hamza shabeer', 'hassan abbas', 'muhammad hassan khan', 'irtaza ahmad', 'umair iftikhar', 'zain rehman', 'siddiqua farooq', 'tehreem hussain', 'marwa madni', 'muhammad sabeeh', 'muhammad hassan', 'muhammad hassaan', 'narmeen falak', 'ahsan mukhtar', 'zunnayyara khalid']
    },
    'accommodation': {
        'coordinators': ['ajmal shahzad', 'saleha mushtaq'],
        'heads': ['furqan shaikh', 'muhammad aslam'],
        'members': ['umar asif', 'zubair khan', 'inaam ullah', 'muhammad abdullah ansari', 'muhammad mohad', 'musfirah ehsan', 'faiz ahmed', 'shazil anjum', 'khizer saeed', 'syed qasim raza', 'muhammad fakhar']
    },
    'documentation': {
        'coordinators': ['minhaj ansari', 'amina tabassum'],
        'heads': ['ahmed dar', 'ammar mukhtar'],
        'members': ['abdul wahab nasir', 'furqan shaikh', 'muhammad mohad', 'tehreem hussain', 'usama shahid', 'huzaifa ahmed', 'muhammad furqan', 'rana gufran', 'umar shahzad', 'waleed umer', 'zubair khan', 'shazil anjum', 'dilawaiz', 'saeed ahmad', 'faiz ahmed', 'm. haider khan', 'minahil zafar', 'mohammad ahmad bashir', 'muhammad hunzilah', 'musfirah ehsan', 'samavia jaffery', 'wasif jan', 'junaid rehman']
    },
    'transport': {
        'coordinators': ['muhammad hassan'],
        'heads': ['tanveer hussain', 'abdul rafay'],
        'members': ['zain ul hassan', 'muhammad mohad', 'shan yousaf', 'syed muhammad haider abbas', 'umar asif', 'muhammad umar', 'muhammad inaam elahi', 'zunair malik', 'abdur rehman shamsi', 'rao usama', 'asad ali', 'ameer hamza', 'abdullah ahmad']
    },
    'design': {
        'coordinators': ['mubashir ali'],
        'heads': ['hassan sattar', 'fakhar fatima', 'yousma yousaf'],
        'members': ['muhammad usman khalid', 'aqsa mushtaq', 'sheikh nauman ahmed', 'talha amjad', 'humair abbas', 'isra imran', 'fasih shaukat', 'sijil jehangir', 'shaharyar sajid', 'dawood mazhar', 'khizer saeed', 'dilawaiz', 'narmeen falak', 'muhammad haziq', 'emaan zahra', 'nimra anjum']
    },
    'finance & purchase': {
        'coordinators': ['hamza ahmed'],
        'heads': ['osama khalid', 'rana gufran'],
        'members': ['usama shahid', 'faraaz muhammad khan', 'hamza irshad', 'muhammad mohad', 'sadaf rehmat', 'ruman tahir', 'mohammad sanaullah', 'maham saeed', 'faisal', 'muhammad furqan', 'ammar mukhtar', 'hurairah javed', 'khaz ahmed']
    },
    'decoration': {
        'coordinators': ['muhammad umair aziz'],
        'heads': ['nimra riaz', 'bibi ayesha'],
        'members': ['ahmad hussain', 'aneela riaz', 'huzaifa ahmed', 'linta kamran', 'm. mouaaz ranjha', 'mehwish israr', 'minahil zafar', 'muhammad abdullh jawwad', 'muhammad ali', 'muhammad faisal azam', 'muhammad hassan', 'muhammad taha nasir', 'muhammad talha', 'rao usama', 'taimoor ahmad khan', 'muhammad aslam']
    },
    'carnival': {
        'coordinators': ['ahmad raza'],
        'heads': ['muhammad sheraz aamir', 'muhammad hassaan'],
        'members': ['ahmad dar', 'ammar mukhtar', 'inaam ullah', 'saad rafiq', 'tauqeer nasir', 'abdur rehman', 'ahad ghufran', 'ahmed abdullah', 'ayatullah', 'muhammad adil', 'muneeb ur rehman', 'saifullah', 'sumama masood', 'zubair khan', 'umer husnain', 'khizer saeed', 'abdul rehman']
    },
    'sponsorship': {
        'coordinators': ['saifullah', 'arslan khalid'],
        'heads': ['khaz ahmed', 'wasif jan'],
        'members': ['ahad ghufran', 'usama shahid', 'hamza tahir', 'ahsan mukhtar', 'ajmal shahzad', 'daud shafqat', 'muhammad usman khalid', 'talha bilal', 'muhammad zakki sohail', 'ruman tahir', 'mubashir ali', 'abdul wahab nasir', 'hamza ahmed', 'marwa madni']
    },
};

var currentPage = '';
// var images = ['images/mic-01.jpg', 'images/mic-02.jpg', 'images/mic-03.jpg'];
// var imageIndex = 0;
// var videos = ['videos/video-01.mp4', 'videos/video-02.mp4'];
// var videoIndex = 0;
var TAG = '[main.js] : ';

$(function() {
    // console.log(TAG + 'document: starts');

    let htmlPath = window.location.href;
    // let domainName = 'pionpieas.com';
    let domainName = "127.0.0.1:8080";
    let startIndex = htmlPath.search(domainName + '/(.)+.html');
    let endIndex = htmlPath.search('.html');
    currentPage = htmlPath.substring(startIndex + domainName.length + 1, endIndex);
    $('.active').removeClass('active');

    // console.log(TAG + 'htmlPath: ' + htmlPath);
    console.log(TAG + 'domainName: ' + domainName);
    // console.log(TAG + 'domainName.length: ' + domainName.length);
    // console.log(TAG + 'startIndex: ' + startIndex);
    // console.log(TAG + 'endIndex: ' + endIndex);
    // console.log(TAG + 'currentPage: ' + currentPage);

    let navbarstate = 1;
    $('#nav-menu-control').click(function(e) {
        console.log(TAG + 'nav-menu-control click: starts');
        console.log($('#nav-menu'));
        e.preventDefault();
        if (navbarstate) {
            $('#nav-menu').show();
            $('#nav-menu').addClass('nav-menu-toggle');
        } else {
            $('#nav-menu').hide();
            $('#nav-menu').removeClass('nav-menu-toggle');
        }
        navbarstate = !navbarstate;
        console.log($('#nav-menu'));
        console.log(TAG + 'nav-menu-control click: ends');
    });

    setTimeout(function() {
        console.log('[setTimeout][starts]');
        $("#loading-overlay").hide();
        // $(".section").css("display", "block");
    }, 1000);

    switch (currentPage) {
        case 'about-us':
            console.log(TAG + 'case about-us: setting up about-us.html');
            $('#nav-menu a[fileName="about-us"]').addClass('active');
            break;
        case 'modules':
            console.log(TAG + 'case modules: setting up modules.html');
            $('#nav-menu a[fileName="modules"]').addClass('active');
            createModulesPage();
            createModulesSlider();
            $('#search-bar #search-input').keyup(function() {
                console.log('search-input keypress: starts');
                let searchString = $('#search-bar #search-input').val();
                console.log('search-input keypress: ' + searchString);
                console.log(searchString.length);
                if (searchString.length > 0) {
                    let modulesList = $('.modules-list-container .module-card');
                    console.log(modulesList.length);
                    for (let module of modulesList) {
                        let id = $(module).attr('id');
                        let searchIndex = MODULES_DATA[id][MODULE_KEYS[0]].toLowerCase().search(searchString.toLowerCase());
                        if (searchIndex >= 0) {
                            console.log('showing -> ' + MODULES_DATA[id][MODULE_KEYS[0]]);
                            $(module).show();
                        } else {
                            console.log('hiding -> ' + MODULES_DATA[id][MODULE_KEYS[0]]);
                            $(module).hide();
                        }
                    }
                } else {
                    $('.modules-list-container .module-card').show();
                }
                console.log('search-input keypress: ends');
            });
            $('#module-detail-container #module-detail-card').scroll(function() {
                $('#module-detail-card>img').css('top', this.scrollTop);
            });
            break;
        case 'timeline':
            console.log(TAG + 'case timeline: setting up timeline.html');
            $('#nav-menu a[fileName="timeline"]').addClass('active');
            break;
        case 'teams':
            console.log(TAG + 'case teams: setting up teams.html');
            $('#nav-menu a[fileName="teams"]').addClass('active');
            createTeamsPage();
            createTeamsSlider();
            break;
        case 'gallery':
            console.log(TAG + 'case gallery: setting up gallery.html');
            $('#nav-menu a[fileName="gallery"]').addClass('active');
            break;
        case 'contact-us':
            console.log(TAG + 'case contact-us: setting up contact-us.html');
            $('#nav-menu a[fileName="contact-us"]').addClass('active');
            break;
        default:
            console.log(TAG + 'case default: setting up index.html');
            $('#nav-menu a[fileName="index"]').addClass('active');
            // setupCountdown();
            $('#nav-menu a').click(function() {
                console.log(TAG + 'nav-menu <a> clicked');
                console.log(TAG + $(this).attr('index'));
                sessionStorage.setItem('indexActive', $(this).attr('index'));
            });

            $("#button-day-1").click(function() {
                $(".day1").css({ "display": "flex" });
                $(".day2").css({ "display": "none" });
                $(".day3").css({ "display": "none" });
            });
            $("#button-day-2").click(function() {
                $(".day1").css({ "display": "none" });
                $(".day2").css({ "display": "flex" });
                $(".day3").css({ "display": "none" });
            });
            $("#button-day-3").click(function() {
                $(".day1").css({ "display": "none" });
                $(".day2").css({ "display": "none" });
                $(".day3").css({ "display": "flex" });
            });

            // $('#section-image-slider .slide-left-button').click(function() {
            //     imageIndex = (imageIndex - 1) % images.length;
            //     imageIndex = (imageIndex < 0) ? imageIndex + images.length : imageIndex;
            //     $('#section-image-slider img').attr('src', images[imageIndex]);
            // });

            // $('#section-image-slider .slide-right-button').click(function() {
            //     imageIndex = (imageIndex + 1) % images.length;
            //     $('#section-image-slider img').attr('src', images[imageIndex]);
            // });

            // $('#section-video-slider .slide-left-button').click(function() {
            //     videoIndex = (videoIndex - 1) % videos.length;
            //     videoIndex = (videoIndex < 0) ? videoIndex + videos.length : videoIndex;
            //     $('#section-video-slider video source').attr('src', videos[videoIndex]);
            //     $('#section-video-slider video')[0].load();
            // });

            // $('#section-video-slider .slide-right-button').click(function() {
            //     videoIndex = (videoIndex + 1) % videos.length;
            //     $('#section-video-slider video source').attr('src', videos[videoIndex]);
            //     $('#section-video-slider video')[0].load();
            // });
            break;
    }

    // console.log(TAG + 'document: ends');
});

var MODULE_KEYS = ['Name of Module', 'Heads', 'Contact', 'Minimun Members', 'Maximum Members', 'Module Fee'];

function createModulesPage() {
    console.log(TAG + 'createModulesPage: starts');
    let html = {
        'Technical': [],
        'Non-Technical': [],
        'Sports': [],
        'E-Sports': [],
    };
    let clickedCard;
    for (let module_id in MODULES_DATA) {
        let module = MODULES_DATA[module_id];
        let category = module['category'];
        html[category] += '<div id="' + module_id + '" class="module-card">\n';
        html[category] += '    <img class="module-image" src="images/images-modules/' + module['Image Name'] + '">\n';
        html[category] += '    <div class="text-gradient-2">';
        html[category] += '        <p class="title">' + module[MODULE_KEYS[0]] + '</p>\n';
        html[category] += '        <p class="head-name">' + module[MODULE_KEYS[1]] + '</p>\n';
        html[category] += '        <p class="head-contact">' + module[MODULE_KEYS[2]] + '</p>\n';
        html[category] += '    </div>';
        html[category] += '</div>\n';
    }
    $('#modules #Technical-Modules').html(html['Technical']);
    $('#modules #Non-Technical-Modules').html(html['Non-Technical']);
    $('#modules #Sports-Modules').html(html['Sports']);
    $('#modules #ESports-Modules').html(html['E-Sports']);
    $('.modules-list-container .module-card').click(function() {
        console.log('module-card click: starts');
        showModuleDetail(this);
        clickedCard = this;
        console.log('module-card click: ends');
    });
    $('#module-detail-container #container-close').click(function() {
        console.log('container-close clicked');
        $('#module-detail-container').css('visibility', 'hidden');
    });
    $('#module-detail-container #module-previous').click(function() {
        console.log('module-previous clicked');
        showModuleDetail($(clickedCard).prev());
        clickedCard = $(clickedCard).prev();
    });
    $('#module-detail-container #module-next').click(function() {
        console.log('module-next clicked');
        showModuleDetail($(clickedCard).next());
        clickedCard = $(clickedCard).next();
    });
    console.log(TAG + 'createModulesPage: ends');
}

function createModulesSlider() {
    let INNER_TAG = '[createModulesSlider]';
    console.log(INNER_TAG + '[starts]');
    let modules_list = $('.modules-list-container');
    console.log(modules_list.length);

    let html = '<ul>\n';
    for (let i = 0; i < modules_list.length; i++) {
        // console.log(sections[i]);
        html += '    <li>\n';
        html += '        <span id="tooltip">' + $(modules_list[i]).attr('id') + '</span>\n';
        html += '        <a href="#' + $(modules_list[i]).attr('id') + '">•</a>\n';
        html += '    </li>\n';
    }
    html += '</ul>';
    // console.log(html);
    $('#slider').html(html);

    $('#slider li').hover(function() {
        $($(this).children()[0]).toggle();
    });

    $(window).mousemove(function(e) {
        let mouseX = e.clientX;
        let windowWidth = window.innerWidth;
        if (mouseX >= 0.9 * windowWidth) {
            $('#slider').css('opacity', 1);
        } else {
            $('#slider').css('opacity', 0.5);
        }
    });
    console.log(INNER_TAG + '[ends]');
}

function showModuleDetail(inputModule) {
    console.log('showModuleDetail: starts');
    console.log(inputModule);
    let clickedModuleId = $(inputModule).attr('id');
    let module = MODULES_DATA[clickedModuleId];
    let moduleDetails = '';
    moduleDetails += '<p id="module-title"><strong>Module Name: </strong>' + module[MODULE_KEYS[0]] + '</p>\n';
    moduleDetails += '<p id="module-head-name"><strong>Head: </strong>' + module[MODULE_KEYS[1]] + '</p>\n';
    moduleDetails += '<p id="module-head-contact"><strong>Contact: </strong>' + module[MODULE_KEYS[2]] + '</p>\n';
    moduleDetails += '<p id="minimum-members"><strong>Minimum Members: </strong>' + module[MODULE_KEYS[3]] + '</p>\n';
    moduleDetails += '<p id="maximum-members"><strong>Maximum Members: </strong>' + module[MODULE_KEYS[4]] + '</p>\n';
    moduleDetails += '<p id="module-fee"><strong>Fee: </strong>' + module[MODULE_KEYS[5]] + '</p>\n';
    if ('Category' in module) {
        moduleDetails += '<p id="module-category"><strong>Category: </strong>' + module['Category'] + '</p>\n';
    }
    if ('Description' in module) {
        moduleDetails += '<p id="module-description"><strong>Description: </strong>' + module['Description'] + '</p>\n';
    }
    if ('Rules' in module) {
        moduleDetails += '<p><strong>Rules: </strong></p>\n';
        moduleDetails += '<ul id="module-rules">\n';
        for (let rule of module['Rules']) {
            moduleDetails += '    <li>' + rule + '</li>\n';
        }
        moduleDetails += '</ul>\n';
    }
    $('#module-detail-container #module-detail').html(moduleDetails);
    $('#module-detail-card > img').attr('src', 'images/images-modules/' + module['Image Name']);
    $('#module-detail-card > img').css('width', '100%');
    $('#module-detail-container').css('visibility', 'visible');
    console.log('showModuleDetail: ends');
}

function createTeamsPage() {
    console.log(TAG + 'createTeamsPage: starts');
    let html = '';
    for (let team_name in TEAMS_DATA) {
        console.log('createTeamsPage: ' + team_name);
        let coordinators = TEAMS_DATA[team_name]['coordinators'].sort();
        let heads = TEAMS_DATA[team_name]['heads'].sort();
        let members = TEAMS_DATA[team_name]['members'].sort();

        html += '<section id="' + team_name + '" class="team-container">\n';
        html += '    <h1>Team ' + team_name + '</h1>\n';
        html += '    <div class="members-container">\n';
        if (coordinators) {
            html += '        <div class="coordinators">\n';
            for (let name of coordinators) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/images-coordinators/' + name + '.jpg">\n';
                html += '                <div class="text-gradient">';
                html += '                    <p class="member-name">' + name + '</p>\n';
                html += '                    <p class="member-post">Coordinator</p>\n';
                html += '                </div>';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }
        if (heads) {
            html += '        <div class="heads">\n';
            for (let name of heads) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/images-heads/' + name + '.jpg">\n';
                html += '                <div class="text-gradient">';
                html += '                    <p class="member-name">' + name + '</p>\n';
                html += '                    <p class="member-post">Head</p>\n';
                html += '                </div>';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }
        if (members) {
            html += '        <div class="members">\n';
            for (let name of members) {
                html += '            <div class="team-member">\n';
                html += '                <img src="images/images-members/' + name + '.jpg">\n';
                html += '                <div class="text-gradient">';
                html += '                    <p class="member-name">' + name + '</p>\n';
                html += '                    <p class="member-post">Member</p>\n';
                html += '                </div>';
                html += '            </div>\n';
            }
            html += '        </div>\n';
        }
        html += '    </div>\n';
        html += '</section>\n';
    }
    $('#teams').append(html);
    // console.log($('.team-member img'));
    var error_names = '';
    $('img').on('error', function(e) {
        // console.log('error occured');
        // let path = $(this).attr('src');
        // let startIndex = path.search('members/(.)+.jpg');
        // let endIndex = path.search('.jpg');
        // let name = path.substring(startIndex + 8, endIndex);
        // error_names += name + ', ';
        // console.log(error_names);
        $(this).attr('src', 'images/placeholder-person - 256.jpg');
    });
    console.log(TAG + 'createTeamsPage: ends');
}

function createTeamsSlider() {
    console.log('createTeamsSlider: starts');
    let sections = $('main section');
    console.log('section -> ' + sections.length);

    let html = '<ul>\n';
    for (let i = 0; i < sections.length; i++) {
        // console.log(sections[i]);
        html += '    <li>\n';
        html += '        <span id="tooltip">' + $(sections[i]).attr('id') + '</span>\n';
        html += '        <a href="#' + $(sections[i]).attr('id') + '">•</a>\n';
        html += '    </li>\n';
    }
    html += '</ul>';
    // console.log(html);
    $('#slider').html(html);

    $('#slider li').hover(function() {
        $($(this).children()[0]).toggle();
    });

    $(window).mousemove(function(e) {
        let mouseX = e.clientX;
        let windowWidth = window.innerWidth;
        if (mouseX >= 0.9 * windowWidth) {
            $('#slider').css('opacity', 1);
        } else {
            $('#slider').css('opacity', 0.5);
        }
    });
    console.log('createTeamsSlider: ends');
}

// function setupCountdown() {
//     console.log('countdown starts');
//     $('#countdown-end-msg').hide();
//     $('#countdown').show();
//     window.setInterval(function() {
//         console.log('window.setInterval starts');
//         var endTime = new Date(2019, 9, 25);
//         var currentTime = new Date();
//         var remainingTime = (endTime - currentTime) / 1000;
//         var months = twoChars(Math.floor(remainingTime / (60 * 60 * 24 * 30)));
//         remainingTime = remainingTime % (60 * 60 * 24 * 30);
//         var days = twoChars(Math.floor(remainingTime / (60 * 60 * 24)));
//         remainingTime = remainingTime % (60 * 60 * 24);
//         var hours = twoChars(Math.floor(remainingTime / (60 * 60)));
//         remainingTime = remainingTime % (60 * 60);
//         var minutes = twoChars(Math.floor(remainingTime / 60));
//         remainingTime = remainingTime % 60;
//         var seconds = twoChars(Math.floor(remainingTime));
//         let html = '';
//         if (remainingTime > 0) {
//             // console.log('changing time');
//             // console.log('months' + months);
//             // console.log('days' + days);
//             // console.log('hours' + hours);
//             // console.log('minutes' + minutes);
//             // console.log('seconds' + seconds);
//             // console.log($('#countdown td#col1').html());
//             // console.log($('#countdown td#col2').html());
//             // console.log($('#countdown td#col3').html());
//             // console.log($('#countdown td#col4').html());
//             // console.log($('#countdown td#col5').html());
//             $('#countdown td#col1').html(months);
//             $('#countdown td#col2').html(days);
//             $('#countdown td#col3').html(hours);
//             $('#countdown td#col4').html(minutes);
//             $('#countdown td#col5').html(seconds);
//         } else {
//             $('#countdown-container p').hide();
//             $('#countdown-container #countdown').hide();
//             $('#countdown-container #countdown-end-msg').show();
//         }
//     }, 1000);
//     console.log('countdown starts');
// }

// function twoChars(number) {
//     return (('' + number).length == 1) ? '0' + number : '' + number
// }