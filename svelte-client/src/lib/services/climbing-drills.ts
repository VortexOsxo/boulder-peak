const climbingDrills = [
    {
        "name": "Footwork Precision",
        "description": "Focus on placing your feet precisely on holds without looking at them. Climb easy problems or routes, but concentrate solely on your feet. Aim to place each foot carefully, feeling the hold before stepping on it. This drill helps build awareness and improves foot placement under pressure."
    },
    {
        "name": "Silent Feet",
        "description": "Climb a problem or route while trying to make no noise when placing your feet. The goal is to step as quietly as possible, which forces you to place your feet accurately and carefully, improving your precision and control."
    },
    {
        "name": "Flagging Drill",
        "description": "Practice flagging (using one leg to maintain balance) while climbing. As you climb, extend one leg out to the side or behind you to keep your body in balance. This helps improve body control and your ability to stay efficient on tricky holds."
    },
    {
        "name": "Controlled Ascent",
        "description": "Climb an easy route slowly, focusing on controlled movements rather than speed. Aim to keep your body in a steady position with no swinging or jerky movements. This builds strength, improves technique, and helps with energy conservation."
    },
    {
        "name": "Lock-Off Holds",
        "description": "Pull yourself up on a hold, then lock your arms at a 90-degree angle and hold the position. This exercise helps develop the strength needed for maintaining control when holding onto small or challenging holds."
    },
    {
        "name": "Downclimbing",
        "description": "After completing a route, downclimb it instead of jumping down. This helps improve your footwork, body positioning, and technique while conserving energy. Downclimbing also helps you get comfortable with using your body in both directions."
    },
    {
        "name": "Dynamic Movement",
        "description": "Climb problems in a way as dynamic as possible, try to never stop moving. This improves your explosiveness and teaches you to use your body in a fluid, efficient way."
    },
    {
        "name": "Body Tension Drill",
        "description": "While climbing, focus on maintaining a straight body line by engaging your core and squeezing your legs. The goal is to reduce unnecessary movement by using body tension, which helps with maintaining stability on overhung routes or during strenuous moves."
    },
    {
        "name": "One-Foot Climbing",
        "description": "Climb a route or problem using only one foot at a time. When one foot is on the wall, keep the other one off. This forces you to develop more precise footwork and better control, making you less reliant on using both feet at once."
    },
    {
        "name": "Match Holds Drill",
        "description": "When climbing, practice matching your hands on the same hold (both hands on a jug or small hold). This drill teaches you how to transition between holds more effectively and keeps your body position efficient, especially on crimps or small holds."
    },
    {
        "name": "Squeeze Drill",
        "description": "Focus on squeezing holds as you climb. Imagine that you are trying to create tension by squeezing the holds as hard as you can with your hands and feet. This drill helps you develop better contact strength and improves your overall stability on various types of holds."
    },
    {
        "name": "Staggered Hand Climbing",
        "description": "Climb a problem or route, but alternate using one hand at a time. For example, when using a jug, place your left hand first, then your right hand on the next hold, and so on. This helps you practice reaching efficiently and using one hand at a time, making transitions smoother."
    }
]

export function getDrills() {
    return climbingDrills;
}

export function getRandomDrill() {
    const randomIndex = Math.floor(Math.random() * climbingDrills.length);
    return climbingDrills[randomIndex];
}