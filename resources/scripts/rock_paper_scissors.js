class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    function getRandomInt(x) {
      return Math.floor(Math.random() * Math.floor(x));
    }
    return acceptedValues[getRandomInt(3)];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection === cpuSelection){
      return `tie`;
    } else if ((userSelection == `rock` && cpuSelection == `scissors`) || (userSelection == `paper` && cpuSelection == `rock`) || (userSelection == `scissors` && cpuSelection == `paper`)){
      return `win`;
    } else {
      return `lose`;
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    //return this.determineWinner(userSelection, this.generateCPUResponse());
    let CPUResponse = this.generateCPUResponse();
    this.determineWinner();
    if (this.determineWinner() == `win`){
      this.score.user ++;
      this.gameHistoryLog.push(this.username + ` selected` + userSelection + ` CPU selected` + CPUResponse + ` ` + userSelection + ` wins`);
    } else if (this.determineWinner() == `lose`){
      this.score.cpu ++;
      this.gameHistoryLog.push(this.username + ` selected` + userSelection + ` CPU selected` + CPUResponse + ` ` + userSelection + ` loses`);
    }
  }

}