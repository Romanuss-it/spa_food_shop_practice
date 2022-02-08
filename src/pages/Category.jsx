import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getFilteredCategories } from "../api"
import { Preloader } from "../components/Prealoder"
import { MealList } from "../components/MealList"

function Category() {
  const { name } = useParams()
  const [meals, setMeals] = useState([])
  const { goBack } = useHistory()

  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals))
  }, [name])

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  )
}

export { Category }
