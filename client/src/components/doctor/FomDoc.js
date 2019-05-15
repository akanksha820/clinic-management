import React from 'react'

class FormDoc extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <label>
                        Name
                        <input type = "text" />

                    </label>
                    <label>
                        Email
                        <input type= "text" />
                    </label>
                </form>
            </div>
        )
    }
}

export default FormDoc