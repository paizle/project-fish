import './Water.scss'
import React from "react"

export default function Water({children, id, route, ...rest}) {

    const [results, setResults] = React.useState([])

    React.useEffect(() => {
        console.log({route})

        axios.get(route(id, ''))
            .then((result) => {
                //debugger
                setResults(result.data.limits ?? [])
            })
    }, [])


    return (
        <div className="Water">


            <h1>Info</h1>

            <ul className={`results ${results.length ? 'has-results' : null}`}>
            {true
                ? results.map((result) => {
                        return (result?.fish ? <li>{result?.fish.name}</li> : null)
                })       
                : null
            }
            </ul>

            <p>
                
one:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis dolor eros. Etiam quis ullamcorper lorem. Proin volutpat consectetur dui vitae fringilla. Nulla sed tortor ac magna ornare pretium ut sit amet ipsum. Sed nec libero enim. Morbi faucibus ipsum ut interdum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Aenean pretium pellentesque ligula sit amet tincidunt. Nullam tincidunt a libero eu malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae tempor ante. Nunc venenatis ipsum libero, et tempus enim pretium quis.
</p><p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut felis eros, volutpat nec vehicula quis, pharetra quis metus. Aliquam feugiat eu augue at posuere. Praesent at sodales nisl. Sed eu eros neque. Donec ultricies magna et consectetur aliquet. Proin quis lacus sit amet lectus tristique tincidunt. Nullam rutrum elit nec massa mattis, at sodales est sodales. Vivamus semper dolor id fermentum commodo. Maecenas nec dolor a nunc consequat elementum. Fusce neque mi, dapibus id accumsan et, varius eu lectus. Sed ligula mi, efficitur non fermentum et, aliquam non turpis. Ut pellentesque ante nec magna congue tempus. Integer bibendum condimentum est, vitae facilisis libero. Duis interdum, orci non posuere rutrum, nisl mauris pharetra orci, ac dapibus nibh mauris eget lorem. Morbi eleifend, purus ut blandit euismod, ex felis lobortis erat, ac mollis lectus odio eu massa.
</p><p>
Phasellus tempus a magna et commodo. Sed in urna nisl. Vivamus elementum rutrum ultrices. Nulla sit amet tempor mauris. Ut id ligula lorem. Pellentesque tempus arcu vel velit porttitor viverra. Sed dapibus, urna sit amet ornare blandit, ante elit faucibus enim, vel imperdiet arcu eros ac metus. Pellentesque laoreet non tellus et consectetur. Duis finibus lorem sit amet vehicula consectetur. Duis nec porttitor mi. Pellentesque viverra velit vel diam rhoncus volutpat. Donec consequat, odio dapibus vehicula condimentum, sem risus iaculis velit, gravida auctor ligula lacus lobortis nisi. Ut ex arcu, interdum et viverra non, rhoncus eu lorem.
</p><p>
Etiam enim tellus, interdum sit amet facilisis vitae, volutpat non ante. Vivamus ullamcorper accumsan tempor. Nullam tristique dolor massa. Integer commodo efficitur mauris, id malesuada nunc cursus efficitur. Integer rhoncus dui at metus congue, et cursus risus auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean a dictum odio. Donec vel rutrum mauris. Etiam varius nibh sit amet auctor scelerisque. Aenean ut mauris pharetra, vehicula diam eget, lobortis lectus. Proin eget nunc non nibh cursus hendrerit fermentum eu nunc. Nulla condimentum justo vel ex euismod gravida. Curabitur a elit nibh. In tristique mi in euismod varius.
</p><p>
Mauris aliquam risus eu ipsum vehicula, non vulputate orci imperdiet. Sed porta justo ultrices, vestibulum felis et, fringilla turpis. Praesent vel diam tortor. Ut tincidunt leo id velit sodales dapibus ac nec turpis. Curabitur a blandit nibh. Phasellus auctor pulvinar eros, ut lobortis diam gravida vitae. Suspendisse non rutrum purus. Phasellus augue eros, semper quis dignissim sit amet, aliquam ut libero. Nunc eu varius nulla, eu facilisis nisl. Donec at euismod nunc. Aliquam erat volutpat. Phasellus nulla ligula, bibendum ut magna ac, pulvinar porta nibh. Maecenas augue enim, lacinia a ante id, dapibus vulputate nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            </p><p>
                

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis dolor eros. Etiam quis ullamcorper lorem. Proin volutpat consectetur dui vitae fringilla. Nulla sed tortor ac magna ornare pretium ut sit amet ipsum. Sed nec libero enim. Morbi faucibus ipsum ut interdum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Aenean pretium pellentesque ligula sit amet tincidunt. Nullam tincidunt a libero eu malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae tempor ante. Nunc venenatis ipsum libero, et tempus enim pretium quis.
</p><p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut felis eros, volutpat nec vehicula quis, pharetra quis metus. Aliquam feugiat eu augue at posuere. Praesent at sodales nisl. Sed eu eros neque. Donec ultricies magna et consectetur aliquet. Proin quis lacus sit amet lectus tristique tincidunt. Nullam rutrum elit nec massa mattis, at sodales est sodales. Vivamus semper dolor id fermentum commodo. Maecenas nec dolor a nunc consequat elementum. Fusce neque mi, dapibus id accumsan et, varius eu lectus. Sed ligula mi, efficitur non fermentum et, aliquam non turpis. Ut pellentesque ante nec magna congue tempus. Integer bibendum condimentum est, vitae facilisis libero. Duis interdum, orci non posuere rutrum, nisl mauris pharetra orci, ac dapibus nibh mauris eget lorem. Morbi eleifend, purus ut blandit euismod, ex felis lobortis erat, ac mollis lectus odio eu massa.
</p><p>
Phasellus tempus a magna et commodo. Sed in urna nisl. Vivamus elementum rutrum ultrices. Nulla sit amet tempor mauris. Ut id ligula lorem. Pellentesque tempus arcu vel velit porttitor viverra. Sed dapibus, urna sit amet ornare blandit, ante elit faucibus enim, vel imperdiet arcu eros ac metus. Pellentesque laoreet non tellus et consectetur. Duis finibus lorem sit amet vehicula consectetur. Duis nec porttitor mi. Pellentesque viverra velit vel diam rhoncus volutpat. Donec consequat, odio dapibus vehicula condimentum, sem risus iaculis velit, gravida auctor ligula lacus lobortis nisi. Ut ex arcu, interdum et viverra non, rhoncus eu lorem.
</p><p>
Etiam enim tellus, interdum sit amet facilisis vitae, volutpat non ante. Vivamus ullamcorper accumsan tempor. Nullam tristique dolor massa. Integer commodo efficitur mauris, id malesuada nunc cursus efficitur. Integer rhoncus dui at metus congue, et cursus risus auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean a dictum odio. Donec vel rutrum mauris. Etiam varius nibh sit amet auctor scelerisque. Aenean ut mauris pharetra, vehicula diam eget, lobortis lectus. Proin eget nunc non nibh cursus hendrerit fermentum eu nunc. Nulla condimentum justo vel ex euismod gravida. Curabitur a elit nibh. In tristique mi in euismod varius.
</p><p>
Mauris aliquam risus eu ipsum vehicula, non vulputate orci imperdiet. Sed porta justo ultrices, vestibulum felis et, fringilla turpis. Praesent vel diam tortor. Ut tincidunt leo id velit sodales dapibus ac nec turpis. Curabitur a blandit nibh. Phasellus auctor pulvinar eros, ut lobortis diam gravida vitae. Suspendisse non rutrum purus. Phasellus augue eros, semper quis dignissim sit amet, aliquam ut libero. Nunc eu varius nulla, eu facilisis nisl. Donec at euismod nunc. Aliquam erat volutpat. Phasellus nulla ligula, bibendum ut magna ac, pulvinar porta nibh. Maecenas augue enim, lacinia a ante id, dapibus vulputate nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            </p>
            <p>
                

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis dolor eros. Etiam quis ullamcorper lorem. Proin volutpat consectetur dui vitae fringilla. Nulla sed tortor ac magna ornare pretium ut sit amet ipsum. Sed nec libero enim. Morbi faucibus ipsum ut interdum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Aenean pretium pellentesque ligula sit amet tincidunt. Nullam tincidunt a libero eu malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae tempor ante. Nunc venenatis ipsum libero, et tempus enim pretium quis.
</p><p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut felis eros, volutpat nec vehicula quis, pharetra quis metus. Aliquam feugiat eu augue at posuere. Praesent at sodales nisl. Sed eu eros neque. Donec ultricies magna et consectetur aliquet. Proin quis lacus sit amet lectus tristique tincidunt. Nullam rutrum elit nec massa mattis, at sodales est sodales. Vivamus semper dolor id fermentum commodo. Maecenas nec dolor a nunc consequat elementum. Fusce neque mi, dapibus id accumsan et, varius eu lectus. Sed ligula mi, efficitur non fermentum et, aliquam non turpis. Ut pellentesque ante nec magna congue tempus. Integer bibendum condimentum est, vitae facilisis libero. Duis interdum, orci non posuere rutrum, nisl mauris pharetra orci, ac dapibus nibh mauris eget lorem. Morbi eleifend, purus ut blandit euismod, ex felis lobortis erat, ac mollis lectus odio eu massa.
</p><p>
Phasellus tempus a magna et commodo. Sed in urna nisl. Vivamus elementum rutrum ultrices. Nulla sit amet tempor mauris. Ut id ligula lorem. Pellentesque tempus arcu vel velit porttitor viverra. Sed dapibus, urna sit amet ornare blandit, ante elit faucibus enim, vel imperdiet arcu eros ac metus. Pellentesque laoreet non tellus et consectetur. Duis finibus lorem sit amet vehicula consectetur. Duis nec porttitor mi. Pellentesque viverra velit vel diam rhoncus volutpat. Donec consequat, odio dapibus vehicula condimentum, sem risus iaculis velit, gravida auctor ligula lacus lobortis nisi. Ut ex arcu, interdum et viverra non, rhoncus eu lorem.
</p><p>
Etiam enim tellus, interdum sit amet facilisis vitae, volutpat non ante. Vivamus ullamcorper accumsan tempor. Nullam tristique dolor massa. Integer commodo efficitur mauris, id malesuada nunc cursus efficitur. Integer rhoncus dui at metus congue, et cursus risus auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean a dictum odio. Donec vel rutrum mauris. Etiam varius nibh sit amet auctor scelerisque. Aenean ut mauris pharetra, vehicula diam eget, lobortis lectus. Proin eget nunc non nibh cursus hendrerit fermentum eu nunc. Nulla condimentum justo vel ex euismod gravida. Curabitur a elit nibh. In tristique mi in euismod varius.
</p><p>
Mauris aliquam risus eu ipsum vehicula, non vulputate orci imperdiet. Sed porta justo ultrices, vestibulum felis et, fringilla turpis. Praesent vel diam tortor. Ut tincidunt leo id velit sodales dapibus ac nec turpis. Curabitur a blandit nibh. Phasellus auctor pulvinar eros, ut lobortis diam gravida vitae. Suspendisse non rutrum purus. Phasellus augue eros, semper quis dignissim sit amet, aliquam ut libero. Nunc eu varius nulla, eu facilisis nisl. Donec at euismod nunc. Aliquam erat volutpat. Phasellus nulla ligula, bibendum ut magna ac, pulvinar porta nibh. Maecenas augue enim, lacinia a ante id, dapibus vulputate nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            </p>

        </div>
    )
}