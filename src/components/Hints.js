import './Hints.scss'

export default function Hints(props) {

   const {hints} = props;
    console.log(hints);

    const hintDivs = hints.map( // TODO sort by index
        (hint, i) => {
            return <div key={i}>
                <div>
                    index: {hint.index}
                </div>
                <div>
                    Hint: {hint.text}
                </div>
                <div>
                    Code: {hint.code}
                </div>
            </div>
        })

    return (
         <div id="hints">
            <h3> Hints </h3>
            {
                hintDivs
            }
         </div>
    )
}