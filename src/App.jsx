import classNames from "classnames"
import { useState } from "react"

export const App = () => {

  const [visivel,setVisivel] = useState(false)

  const toggleVisivel = () =>{
    setVisivel(visivel)
  }

  const gatinhoLove = "https://lh6.googleusercontent.com/proxy/ioidmm1-vkMhzlLblCUYqi5YxFx4gicxL4KFe-o20Lw_h4bR6uyyr9_Fhc_5VEmzUEkwcJHiPYqGxXPlKekwzi5uXhJq-yX-ICrvzjZfu5rIuwWyq0izUaQNJ-jAAWLW_2cG-fcXxHk"
  const gatinhoOculos = "https://lh3.googleusercontent.com/proxy/yO46rrgDBc1Rvi83vBaQhSPKE4IsPW0ik4rM9ykiIkExWnrZJr4-9YzLBzuLh4W6D9Ts9AC_FR1ricfDmOs0WVtIWjpmAI2ZYgr_6O9Zo1JyiE46jQn26uF2OX0jX3GzXt2tsI2Y19LZlgVutIlN"
  const boloDela = "https://lh3.ggpht.com/dede.pingituro/SEk2lQ4kxrI/AAAAAAAAASw/fKrtyjRljsY/BLO+COMPLETO.gif"
  const vidMad = "https://www.youtube.com/watch?v=2wS0mzT99lI&pp=ygUUcGFyYWLDqW5zIG1hZGFnYXNjYXI%3D"


  const redirection = () =>{
    location.href = vidMad
  }

  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-col items-center my-3 gap-1.5 border-4 p-10 rounded-xl border-purple-700">
        <p className="text-5xl font-bold">Parabéns DADÁ</p>
        <p>Como tenho muito carinho por sua pessoa, resolvi fazer esta singela homenagem à vc.</p>
        <button onClick={redirection} className="bg-purple-600 px-5 py-3 rounded-xl text-white mt-2 hover-0.5">Clique aqui</button>
      </div>


      <div className={classNames('flex flex-r0ol gap-5', visivel && 'hidden' )}>

        <img className="w-[250px]" src={gatinhoLove} alt="" />
        <img className="w-[250px]" src={gatinhoOculos} alt="" />
        <img className="w-[250px]" src={boloDela} alt="" />

      </div>
    
    
    </div>
  )
}
