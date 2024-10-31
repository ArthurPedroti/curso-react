export function SupermarketList({list}) {
    // console.log(list)

    return (
        <>
        <p>SupermarketList</p>
        {list.map((item) => {
            if(item.title === "Apple") {
                return (
                    <li 
                    key={item.id} 
                    style={
                        { 
                            color: 'red' 
                        }
                    } key={item.id}
                    >{item.title}
                    </li>
                )
            }

            if(item.title === "Garlic"){
                return 
            }

            return (
                <li key={item.id}>{item.title}</li>
            )
        })}
        </>
    )
}