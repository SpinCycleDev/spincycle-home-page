const pictureClass = 'h-3/4 sm:h-96 md:h-2/3 lg:px-12 lg:py-20 hover:scale-110 transition duration-700'

const ThreeColumnsWithPictures = ( props ) => {

  return(
    <div className={`grid ${props.breakpoint ? props.breakpoint : 'sm:grid-cols-3'} grid-cols-1 mx-5 text-center place-items-center mb-auto font-vollkorn`}>

      <img 
        className={pictureClass} 
        src={props.picture1.pic} 
        alt={props.picture1.alt} 
      />

        <div className="lg:my-20">
          {props.children}
        </div>

      <img 
        className={`${pictureClass} mb-20 lg:mb-0`}
        src={props.picture2.pic} 
        alt={props.picture1.alt} 
      />
    </div>
  )
}

export default ThreeColumnsWithPictures