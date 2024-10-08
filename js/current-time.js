function setCurrentTimePosition() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay()
  const currentHour = currentDate.getHours()
  const currentMin = currentDate.getMinutes()

  // console.log({ currentDay }, { currentHour })
  const $currentTime = document.querySelector('.currentTime')

  const $calendar = document.querySelector('.calendar-week') || document.querySelector('.calendar-day')
  // console.log({$calendar})
  let calendarBlockSize = $calendar.clientHeight
  let calendarInlineSize = $calendar.clientWidth

  const calendarTimezoneCellInlineSize = document.querySelector('.timezoneCell').clientWidth;
  calendarInlineSize = calendarInlineSize - calendarTimezoneCellInlineSize

  const cellInlineSize = calendarInlineSize / 7


  console.log({ calendarBlockSize }, { calendarInlineSize })
  const calendarDayBlockSize = document.querySelector('.calendarDay').clientHeight
  calendarBlockSize = calendarBlockSize - calendarDayBlockSize
  // console.log({ calendarBlockSize })
  const cellBlockSize = calendarBlockSize / 24
  // console.log({ cellBlockSize }, { cellInlineSize })

  if (($calendar.classList.contains("calendar-week"))) { 
    $currentTime.style.top = `${cellBlockSize * (currentHour) + calendarDayBlockSize + (cellBlockSize / 60) * currentMin}px`
    $currentTime.style.left = `${cellInlineSize * (currentDay) + calendarTimezoneCellInlineSize + 24}px`
    $currentTime.style.inlineSize = `${cellInlineSize}px`
  } else {
     $currentTime.style.top = `${cellBlockSize * (currentHour) + calendarDayBlockSize + (cellBlockSize / 60) * currentMin}px`
    $currentTime.style.left = `${calendarTimezoneCellInlineSize + 24}px`
     $currentTime.style.inlineSize = `${calendarInlineSize}px`
  }
}

window.intervalCurrentTimePosition = null



function intervalCurrentTimePosition(interval = 1000) {
  clearInterval(window.intervalCurrentTimePosition)
  setCurrentTimePosition()
  window.intervalCurrentTimePosition = setInterval(setCurrentTimePosition, interval)
}

export {
  setCurrentTimePosition,
  intervalCurrentTimePosition
}