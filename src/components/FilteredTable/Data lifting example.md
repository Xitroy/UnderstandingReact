This component is an example of problem with which I met and data lifting, obviously :)

Problem:
Imagine that you have a table with some data and you have to filter this data by some
search string.

In my current understanding of react components - it would be nice to have 2 components:
Search string and Data table itself.

I'm also considering as a good idea to store items for data table inside the state of component,
because representation of data table literally depends on items :) And also our representation
depends on data filter.

The first idea of organization these components is to create "onChange" method for search input
which will get "e.target.value" and provide this value to the dataTable component (somthing like:
<pre>
handlerOnChange (){
    this.setState(filter: e.target.value);
    }
</pre>
... but... how? "this" inside SearchInput will refer to SearchInput object.

The main problem is that we can't access data from outside component, so we cant just use "this.setState()"
for DataTable inside SearchInput (but we need it for rerender DataTable).

Solution:
https://reactjs.org/docs/lifting-state-up.html
1. You should wrap your components with shared data by additional one
2. Lifting state means that some properties of DataTable state now will belong to the wrapper.
In our case it is a "filter" property.
3. When you call your components inside wrapper you should provide handler function as property.
In our case "onChangeHandler" defined in wrapper but will be called inside SearchInput.
Idea of this guy is to set "filter" property in wrapper.state. This setState will implicitly
invoke rerendering process.
4. Now we can throw wrapper.state.filter to the dataTable in render what will allow us to
rerender the whole component with access to SearchInput for DataTable.
