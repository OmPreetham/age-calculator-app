import { useState } from 'react'

const AgeCalculator = () => {
  // REGEX

  const DAY_REGEX = /^(0?[1-9]|[1-2][0-9]|3[01])$/
  const MONTH_REGEX = /^(0?[1-9]|1[0-2])$/
  const YEAR_REGEX = /^\d{4}$/

  // RESULTS

  const [years, setYears] = useState('- -')
  const [months, setMonths] = useState('- -')
  const [days, setDays] = useState('- -')

  // INPUTS

  const [inputDay, setInputDay] = useState('')
  const [inputMonth, setInputMonth] = useState('')
  const [inputYear, setInputYear] = useState('')

  console.log(inputDay, inputMonth, inputYear)

  // ERROR?

  const [errorDay, setErrorDay] = useState(false)
  const [errorMonth, setErrorMonth] = useState(false)
  const [errorYear, setErrorYear] = useState(false)

  // ERROR MESSAGES

  const [errorDayMessage, setErrorDayMessage] = useState('')
  const [errorMonthMessage, setErrorMonthMessage] = useState('')
  const [errorYearMessage, setErrorYearMessage] = useState('')

  // CURRENT DATES

  const currentDate = new Date()

  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth() + 1
  const currentYear = currentDate.getFullYear()

  console.log(currentDay, currentMonth, currentYear)

  // UPDATE INPUTS

  const updateDay = (day) => {}

  const updateMonth = (month) => {}

  const updateYear = (year) => {}

  return (
    <main className="wrapper">
      <section className="form-wrapper">
        <form className="form" action="">
          <article className="form__item">
            <label
              className={`item__label ${errorDay && 'label-error'}`}
              htmlFor="day"
            >
              day
            </label>
            <input
              onChange={(e) => updateDay(e.target.value)}
              className={`item__input ${errorDay && 'input-error'}`}
              type="number"
              inputMode="numeric"
              min={1}
              max={31}
              id="day"
              name="day"
              placeholder="dd"
            />
            <p className="error-message">{errorDayMessage}</p>
          </article>
          <article className="form__item">
            <label
              className={`item__label ${errorMonth && 'label-error'}`}
              htmlFor="month"
            >
              month
            </label>
            <input
              onChange={(e) => updateMonth(e.target.value)}
              className={`item__input ${errorMonth && 'input-error'}`}
              type="number"
              inputMode="numeric"
              min={1}
              max={12}
              id="month"
              name="month"
              placeholder="mm"
            />
            <p className="error-message">{errorMonthMessage}</p>
          </article>
          <article className="form__item">
            <label
              className={`item__label ${errorYear && 'label-error'}`}
              htmlFor="year"
            >
              year
            </label>
            <input
              onChange={(e) => updateYear(e.target.value)}
              className={`item__input ${errorYear && 'input-error'}`}
              type="number"
              inputMode="numeric"
              min={0}
              max={9999}
              id="year"
              name="year"
              placeholder="yyyy"
            />
            <p className="error-message">{errorYearMessage}</p>
          </article>
          <button type="button">
            <img
              src="images/icon-arrow.svg"
              alt="Down facing arrow icon for submit"
            />
          </button>
        </form>
      </section>
      <section className="results">
        <p className="results__item">
          <span className="results__answer">{years}</span>years
        </p>
        <p className="results__item">
          <span className="results__answer">{months}</span>months
        </p>
        <p className="results__item">
          <span className="results__answer">{days}</span>days
        </p>
      </section>
    </main>
  )
}
export default AgeCalculator
