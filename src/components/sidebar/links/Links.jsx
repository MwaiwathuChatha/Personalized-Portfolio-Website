const Links = () => {

  const items=["Homepage","Services","Portfolio","Contact","About"];

  return (
    <div className="links">
      {
      items.map(item=>(
        <a href={`#${item}`} key={item.id}>{item}</a>
      ))}
    </div>
  )
}

export default Links