// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    const alldirectors = movies.map(function (value, index, movies) {
      return value.director;
    });
    return alldirectors;
  }
  
  // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  
  function howManyMovies(list) {
    const spielbergmovies = list
      .filter(function (value) {
        if (
          value.director === "Steven Spielberg" &&
          value.genre.includes("Drama")
        ) {
          return true;
        } else {
          return false;
        }
      })
      .reduce(function (accumulator, value) {
        return accumulator + 1;
      }, 0);
    return spielbergmovies;
  }
  // Iteration 3: All rates average - Get the average of all rates with 2 decimals
  
  function ratesAverage(list) {
    if (!list.length) {
      return 0;
    }
    let totalmovies = list.reduce(function (accumulator, value, index, list) {
      return totalmovies + value.rate;
    }, 0);
    const averageRate = Math.round((totalRate / list.length) * 100) / 100;
    return averageRate;
  }
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesRate(array) {
    if (!list.length) {
      return 0;
    }
    let dramaRate = movies
      .filter(function (value) {
        if (value.genre.includes("Drama")) {
          return true;
        } else {
          return false;
        }
      })
      .reduce(function (accumulator, value, index, list) {
        return (value + value.rate) / list.length;
      }, 0);
    return dramaRate;
  }
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  
  function orderByYear(array) {
    const newsortedarray = list.sort(function (a, b) {
      if (a.year !== b.year) {
        return b.year - a.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    return newsortedarray;
  }
  
  /* const carsbyyear = cars;
  
  carsnyyear.sort((a,b) => {
  
  function orderByYear (a,b) {
      return a.localeCompare(b);
  }
  */
  
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  
  function orderAlphabetically(array) {
    const clone = [...list];
    const TwentyTitlesABC = clone.sort(function (a, b) {
      if (a.year !== b.year) {
        return b.year - a.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    return TwentyTitlesABC.slice(0, 10).map((x) => x.title);
  }
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  
  // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
  