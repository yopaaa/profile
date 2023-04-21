# Foobar

This project is a profile website built using Next.js, a popular 
React-based framework that leverages server-side rendering (SSR) for faster load times and improved SEO. The website serves as a personal profile or portfolio, showing skills, experience, and projects. By utilizing SSR, the website loads quickly, which enhances the user experience and makes it easier for search engines to index and rank the website. 


inspiration from [tailwindtoolbox](https://github.com/tailwindtoolbox/Profile-Card)


## Installation

To install and run this project locally, follow these steps:

```bash
git clone https://github.com/yopaaa/profile.git

cd profile

npm install

npm run dev
```
>Open your web browser and navigate to http://localhost:3000 to view the website.

That's it! You should now be able to view the profile website on your local machine. If you encounter any issues or have any questions, please refer to the project's GitHub repository for more information.

## Modify web content

The content section of the profile website includes all of the personal information, such as name, address, work experience, email, social media links, skills, certificates, and more. To edit this section, you will need to modify the data.js file located in the `src/data` directory of the project.

To get started, open the data.js file and locate the `data` object. This object contains all of the personal information for the profile website. To modify the content, simply update the values for each key. For example, to change the name, update the name key as follows:
```json
{
  name: "Your Name Here",
...
```

Similarly, you can modify the other keys to update the relevant information. Here's an example of how to update the Certificate object:
```json
Certificate: [
  {
    name: "Coursera",
    competition: "Machine Learning",
    des: "Certificate of completion from Coursera on Machine Learning, earned in 2022",
    img: "/images/coursera.png",
    date: "August 1, 2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/XXXXXXX",
  },
],
```
Make sure to save your changes and verify that they are reflected in the website by running the development server using the `npm run dev` command.

That's it! You should now be able to modify the content of your profile website by editing the `data.js` file. For more information on the structure of the link object and other sections of the website, please refer to the project's 
[GitHub repository.](https://github.com/yopaaa/profile)



## Contributing

Contributions to this project are welcome and encouraged! If you would like to contribute, please follow these steps:

- Fork the project by clicking the "Fork" button in the top-right corner of the project's GitHub repository page.

- Clone your forked repository to your local machine: 
```bash
git clone https://github.com/your-username/profile.git
```

- Create a new branch for your changes:
```bash
git checkout -b your-branch-name
```

- Make your changes and test them using the development server:
```bash
npm run dev
```

- Commit your changes with a descriptive message:
```bash
git commit -m "Add feature xyz"
```
- Push your changes to your forked repository:
```bash
git push origin your-branch-name
```

Once your pull request is submitted, it will be reviewed by the project maintainers, who may request changes or suggest improvements. Please note that all contributions are subject to review and approval, and must adhere to the project's code of conduct.

That's it! Thank you for considering contributing to this project. If you have any questions or need further guidance, please refer to the project's [GitHub](https://github.com/yopaaa/profile) repository or open an issue.

## License


This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License 

The MIT License is a permissive open-source software license that allows for the reuse of the software in both open-source and proprietary projects. Under the terms of the license, you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

- The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.

- In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

By contributing to this project, you agree to license your contributions under the terms of the MIT License.