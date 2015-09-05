var Header = React.createClass({
    render: function () {
        return (
            <h1 className="title">InoDirect</h1>
        );
    }
});

var SearchBar = React.createClass({
    render: function () {
        return (
            <input type="search" />
        );
    }
});
 
var StaffList = React.createClass({
    render: function () {
        return (
            <ul>
                <li>Apple Moses</li>
                <li>Wally Beaver</li>
                <li>Ward Cleaver</li>
                <li>Betty Hampton</li>
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header text="Staff Directory"/>
                <SearchBar />
                <StaffList />
            </div>
        );
    }
});

React.render(
    <HomePage />,
);