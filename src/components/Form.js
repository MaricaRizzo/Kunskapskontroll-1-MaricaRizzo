import React, { Component } from "react";
import Book from "./Book";
import FirstName from "./FirstName";
import LastName from "./LastName";
import SecondClass from "./SecondClass";
import FirstClass from "./FirstClass";
import Terms from "./Terms";
import NumberTickets from "./NumberTickets";
import Title from "./Title";


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstClass: '',
            secondClass: '',
            nTickets:'',
            title:'',
            firstName: '',
            lastName: '',
            agreeTerms: ''
        }
    };


    //Record class functions

    update1class = (e) => {
        this.setState({
            firstClass: e.target.value
        })
    };

    update2class = (e) => {
        this.setState({
            secondClass: e.target.value
        })
    };


    //Record number of tickets

    updateTickets = (e) => {
        this.setState({
            nTickets: e.target.value
        })
    };


    //Record selected title
    
    updateTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }


    //Record name functions

    updateFname = (e) => {
        this.setState({
            firstName: e.target.value
        })
    };

    updateLname = (e) => {
        this.setState({
            lastName: e.target.value
        })
    };

    //Record agreed terms function

    updateTerms = () => {
        this.setState({
            agreeTerms: 'terms agreed'
        })
    };


    //Console log data

    recordData = (e) => {
        e.preventDefault();
        console.log(this.state.firstClass);
        console.log(this.state.secondClass);
        console.log(this.state.nTickets);
        console.log(this.state.title);
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.agreeTerms)
    };




    render() {
        return (
            <form>
                <article id='classForm'>
                    <section className='classInput'>
                        <SecondClass update2class={this.update2class}/>
                        <label for='second'>2:a klass</label>
                    </section>
                    <section className='classInput'>
                        <FirstClass update1class={this.update1class}/>
                        <label for='first'>1:a klass</label>
                    </section>
                </article>

                <article id='ticket-title'>
                    <section className='ticketTitle'>
                        <label for='numberTickets'>Antal biljetter</label>
                        <NumberTickets updateTickets={this.updateTickets}/>
                    </section>

                    <section className='ticketTitle'>
                        <label for='title'>Titel</label>
                        <Title updateTitle={this.updateTitle}/>
                    </section>

                </article>


                <article id='nameForm'>
                    <label for='fname'>Förnamn</label>
                    <FirstName updateFname={this.updateFname} />
                    <label for='lname'>Efternamn</label>
                    <LastName updateLname={this.updateLname} />
                </article>

                <article id='termsForm'>
                    <Terms updateTerms={this.updateTerms}/>
                    <label for='terms'>Godkänner villkoren</label>
                </article>


                <Book recordData={this.recordData} />
            </form>
        );


}
};

export default Form;