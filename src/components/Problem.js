import './Problem.scss'

export default function Problem(props) {

//    const {data: data2, id: propsId} = props;
    const {data, className} = props;
    console.log(data);

    const testDivs = data.testCases.map(
        (testCase, i) => {
            return <div key={i}>
                <div>
                    IN: {testCase.in}
                </div>
                <div>
                    OUT: {testCase.out}
                </div>
            </div>
        })

    return (
         <div id="problem" className={'' + className} >
            <h2> {data.name} </h2>
            <div> Description: {data.description} </div>
            {
                testDivs
            }
         </div>
    )
}