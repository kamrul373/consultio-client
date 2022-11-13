import React from 'react';
import pageTitle from '../../utility/pageTitle';
import "./blogs.css";
const Blogs = () => {
    pageTitle("Blogs")
    return (
        <div className='blogs mt-32 lg:px-12 px-8 mb-8 lg:w-[75%] w-[90%]  mx-auto'>
            {/*  blog 1 */}
            <div className="blog">
                <h1 className='lg:text-4xl text-3xl font-bold text-primary my-8 text-center'>Difference between SQL and NoSQL</h1>
                <div className="thumb flex justify-center">
                    <img src="https://gowithcode.com/wp-content/uploads/2021/04/sql-vs-nosql.jpg" alt="sql-nosql" />
                </div>
                <div className="content my-4 text-justify text-xl">
                    <p className='mb-2'>
                        SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.
                    </p>
                    <p>
                        NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. NoSQL is Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.
                    </p>
                    <p className='text-primary text-2xl my-3 font-semibold'>Main differences between SQL vs NoSQL are:</p>
                    <ul className='list-decimal px-4 my-2'>
                        <li>
                            SQL databases are relational, NoSQL databases are non-relational.
                        </li>
                        <li>
                            SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                        </li>
                        <li>
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        </li>
                        <li>
                            SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        </li>
                        <li>
                            SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </li>
                        <li>
                            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.
                        </li>
                        <li>
                            SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).
                        </li>
                    </ul>
                    <p className='py-4'>Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments. </p>
                </div>
            </div>
            {/* blog 2 */}
            <div className="blog mt-12">
                <h1 className='lg:text-4xl text-3xl font-bold text-primary my-8 text-center'>What is JWT, and how does it work?</h1>
                <div className="thumb flex justify-center">
                    <img src="https://i.ytimg.com/vi/K6pwjJ5h0Gg/maxresdefault.jpg" alt="jwt" />
                </div>
                <div className="content my-4 text-justify text-xl">
                    <p className='mb-2'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                    </p>
                    <p>
                        Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    </p>
                    <p className='text-primary text-2xl my-3 font-semibold'>How does it work?</p>
                    <p className='py-4'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. </p>
                    <p className='py-4'>
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p>
                    <p className='py-4'>Once decoded, you will get two JSON strings:</p>
                    <ul className='list-decimal px-4'>
                        <li>The <strong>header </strong>and the <strong>payload.</strong>
                        </li>
                        <li>The <strong>signature.</strong></li>
                    </ul>
                    <p className='py-4'>
                        JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    </p>
                    <p className='py-4'>Payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>
                    <p>
                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                    </p>
                    <p>
                        The Signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </p>
                </div>
            </div>
            {/* blog 3 */}
            <div className="blog mt-12">
                <h1 className='lg:text-4xl text-3xl font-bold text-primary my-8 text-center'>What is the difference between javascript and NodeJS</h1>
                <div className="thumb flex justify-center">
                    <img src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" alt="js-nodejs" />
                </div>
                <div className="content my-4 text-justify text-xl">
                    <p className='mb-2'>
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    </p>
                    <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    <p className='text-primary text-2xl my-3 font-semibold'>Main differences between JS vs NodeJS are:</p>
                    <ul className='list-decimal px-4'>
                        <li>
                            Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of <span className='text-primary'>NodeJS</span>.
                        </li>
                        <li>
                            JS is basically used on the client-side.
                            <span className='text-primary'>NodeJS</span>
                            is mainly popular on the server-side.
                        </li>
                        <li>
                            Javascript is capable enough to add HTML and play with the DOM.  <span className='text-primary'>NodeJS</span>  does not have capability to add HTML tags.
                        </li>
                        <li>
                            JS is works on the C++-based V8 engine. <span className='text-primary'>NodeJS</span> is C++, C, and JavaScript based.
                        </li>
                        <li>
                            Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.V8 is the Javascript engine inside of  <span className='text-primary'>NodeJS</span> that parses and runs Javascript.
                        </li>
                    </ul>

                </div>
            </div>
            {/* blog 4 */}
            <div className="blog mt-12">
                <h1 className='lg:text-4xl text-3xl font-bold text-primary my-8 text-center'>How does Node JS handle multiple requests at the same time? </h1>
                <div className="thumb flex justify-center">
                    <img src="https://forum.golibrary.co/wp-content/uploads/2020/04/nodejs.png" alt="nodejs" />
                </div>
                <div className="content my-4 text-justify text-xl">
                    <p className='mb-2'>
                        We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
                    </p>
                    <p className='py-4'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.  </p>
                    <p className='py-4'>
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                    <p className='py-4'>
                        A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                        The cluster module allows easy creation of child processes that all share the same server ports.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;