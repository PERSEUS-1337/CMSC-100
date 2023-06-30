import React from 'react';

class SubjectList extends React.Component {

    render() {
        console.log(this.props);

        const subjects = this.props.data;
        return (
            <div>
                {/* SubjectList .... test <code> Hello SubjectList! </code> */}
                <h2>{this.props.title}</h2>

                <ol>
                    {
                        subjects.map((subject, index) => {
                            return <li key={index}> {subject.code} : {subject.description}</li>
                        })
                    }
                </ol>
            </div>
        );
    };
}

export default SubjectList