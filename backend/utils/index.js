const scores = {
'Less than 1 year': 1,
'1-2 years': 2,
'Over 2 years': 3
}
export function computeScore(nodeExperience, reactExperience){
    return scores[nodeExperience] + scores[reactExperience];
}
