import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

export const ContactForm = ({ addData }) => {
  const [value, setValue] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (
      (name === "name" && !/^[A-Za-zА-Яа-яЁё\s]+$/.test(value)) ||
      (name === "number" && isNaN(value))
    ) {
      return setValue((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addData({
      name: value.name,
      number: value.number,
    });
    setValue({
      name: "",
      number: "",
    });
  };

  return (
    <div className={css.form}>
      <form onSubmit={onFormSubmit}>
        <div>
          <h2 className={css.title}>Name:</h2>
          <input
            className={css.input}
            type="text"
            name="name"
            value={value.name}
            onChange={handleChange}
          />
          <h2 className={css.title}>Number:</h2>
          <input
            className={css.input}
            type="text"
            name="number"
            value={value.number}
            onChange={handleChange}
          />
        </div>
        <button className={css.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addData: PropTypes.func.isRequired,
};






// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import css from "./ContactForm.module.css";

// export class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   static propTypes = {
//     addData: PropTypes.func.isRequired,
//   };

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     if (
//       (name === "name" && !/^[A-Za-zА-Яа-яЁё\s]+$/.test(value)) ||
//       (name === "number" && isNaN(value))
//     ) {
//       return this.setState({
//         [name]: "",
//       });}
//     this.setState({
//       [name]: value,
//     });
//   };

//   onFormSubmit = (e) => {
//     e.preventDefault();
//     this.props.addData({
//       name: this.state.name,
//       number: this.state.number,
//     });
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <div className={css.form}>
//         <form onSubmit={this.onFormSubmit}>
//           <div>
//             <h2 className={css.title}>Name:</h2>
//             <input
//               className={css.input}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//             <h2 className={css.title}>Number:</h2>
//             <input
//               className={css.input}
//               type="text"
//               name="number"
//               value={number}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button className={css.button} type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

