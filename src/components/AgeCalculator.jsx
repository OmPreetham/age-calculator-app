const AgeCalculator = () => {
  return (
    <main className="wrapper wrapper-center">
      <section className="form-wrapper">
        <form className="form" action="">
          <article className="form__item">
            <label className="item__label" htmlFor="day">
              day
            </label>
            <input
              className="item__input"
              type="text"
              id="day"
              name="day"
              placeholder="dd"
            />
          </article>
          <article className="form__item">
            <label className="item__label" htmlFor="month">
              month
            </label>
            <input
              className="item__input"
              type="text"
              id="month"
              name="month"
              placeholder="mm"
            />
          </article>
          <article className="form__item">
            <label className="item__label" htmlFor="year">
              year
            </label>
            <input
              className="item__input"
              type="text"
              id="year"
              name="year"
              placeholder="yyyy"
            />
          </article>
          <button type="button">
            <img
              src="/images/icon-arrow.svg"
              alt="Down facing arrow icon for submit"
            />
          </button>
        </form>
      </section>
      <section className="results results-wrapper">
        <p className="results__item">
          <span className="results__answer">--</span>years
        </p>
        <p className="results__item">
          <span className="results__answer">--</span>months
        </p>
        <p className="results__item">
          <span className="results__answer">--</span>days
        </p>
      </section>
    </main>
  )
}
export default AgeCalculator
