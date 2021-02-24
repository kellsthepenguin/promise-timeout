/**
 * 
 * @param {number} timeout 
 * @returns {Promise<void>}
 */
function timeout (timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

module.exports = timeout
