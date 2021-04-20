import logo from './logo.svg';
import './App.scss';

import {useEffect, useState} from 'react';
import CodeFlask from 'codeflask';

import Hints from './components/Hints'
import Problem from './components/Problem'

function App() {

    const [flask, setFlask] = useState(null)

    useEffect(() => {


        const codeflask = new CodeFlask(
            '#code-edit',
            { language: 'py', lineNumbers: true }
        );

        codeflask.onUpdate((code) => {
          // do something with code here.
          // this will trigger whenever the code
          // in the editor changes.
          console.log(code)
        });

        // TODO the next code will be taken from the server:
        codeflask.updateCode('def main():\n    pass');

        codeflask.onSubmit = (e) => {
            const uri = 'localhost:5000/check_code'
        }

        setFlask(codeflask)

    }, [setFlask])

// https://imranhsayed.medium.com/set-up-react-app-with-webpack-webpack-dev-server-and-babel-from-scratch-df398174446d
  const problemData = {
        name: "Odd Numbers",
        description: "Find the first n odd numbers and place them inside the given list.",
        testCases: [
            { in: [5], out: ['2 4 6 8 10']}
        ]
  }

  const hints = [

    {
        index: 1,
        text: 'Try using a for loop to iterate all values between the first and the last of the n odd numbrs',
        code: ''  // TODO think about placing code inside the editor for a step
    },
    {
        index: 2,
        text: 'Use an if for determining whether we found an odd number',
        code: ''  // TODO think about placing code inside the editor for a step
    }  ,
    {
        index: 3,
        text: 'Try a more efficient approach: directly iterate only the odd values, with a stpe of two',
        code: ''  // TODO think about placing code inside the editor for a step
    },
    {
        index: 1,
        text: 'Try using a for loop to iterate all values between the first and the last of the n odd numbrs',
        code: ''  // TODO think about placing code inside the editor for a step
    },
    {
        index: 2,
        text: 'Use an if for determining whether we found an odd number',
        code: ''  // TODO think about placing code inside the editor for a step
    }  ,
    {
        index: 3,
        text: 'Try a more efficient approach: directly iterate only the odd values, with a stpe of two',
        code: ''  // TODO think about placing code inside the editor for a step
    }

  ]


  return (
    <div className="CodePage">
        <div className={'row'}>

            <div className={'col'} id="ui">
                <Problem data={problemData} className={'row'} />
                <Hints hints={hints} className={'row'}  />
            </div>
            <div className={'col'} id="code" >
                <div className={'box effect7'} id="code-edit">
                    // TODO we need a submit button

                </div>
                <button onClick={flask.onSubmit}> submit code </button>
            </div>
        </div>

    </div>
  );
}

export default App;
