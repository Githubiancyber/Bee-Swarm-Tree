const cooldowns = {};
function setCooldown(id, time) {
  cooldowns[id] = true;
  setTimeout(() => (cooldowns[id] = false), time);
}
function checkCooldown(id) {
  if (!cooldowns.hasOwnProperty(id)) {
    return false;
  }
  return cooldowns[id];
}
