function calculateDamage() {
    // Get values from the form
    const baseAttack = parseFloat(document.getElementById('baseAttack').value);
    const attackPercentage = parseFloat(document.getElementById('attackPercentage').value) / 100;
    const flatAttack = parseFloat(document.getElementById('flatAttack').value);
    const damageBonus = parseFloat(document.getElementById('damageBonus').value) / 100;
    const critRate = parseFloat(document.getElementById('critRate').value) / 100;
    const critDamage = parseFloat(document.getElementById('critDamage').value) / 100;
    const enemyResistance = parseFloat(document.getElementById('enemyResistance').value) / 100;
    const reactionMultiplier = parseFloat(document.getElementById('reactionMultiplier').value);
    const elementalMastery = parseFloat(document.getElementById('elementalMastery').value);

    // Calculate attack power
    const attackPower = baseAttack * (1 + attackPercentage) + flatAttack;

    // Calculate crit multiplier
    const critMultiplier = 1 + critRate * critDamage;

    // Calculate resistance multiplier
    let resistanceMultiplier;
    if (enemyResistance >= 0) {
        resistanceMultiplier = 1 - enemyResistance;
    } else {
        resistanceMultiplier = 1 - (enemyResistance / 2);
    }

    // Calculate elemental mastery multiplier
    const elementalMasteryBonus = (16 * elementalMastery) / (2000 + elementalMastery);

    // Calculate final damage
    const finalDamage = attackPower * (1 + damageBonus) * critMultiplier * resistanceMultiplier * reactionMultiplier * (1 + elementalMasteryBonus);

    // Display result
    document.getElementById('result').innerText = finalDamage.toFixed(2);
}
