function saymyname() {
  console.log('hello this is Luis');
}

function writeCountdown(num) {
  console.log(num);
}

function countdown() {
  let i = 10; // rename to count

  waitOneSecAndCount = function () {
    if (i >= 0) {
      writeCountdown(i);
      i--;
      
      setTimeout(() => {
        waitOneSecAndCount();
      }, 1000);
    }
  };

  waitOneSecAndCount()
}

saymyname();
countdown();
