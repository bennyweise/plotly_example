import plotly_example
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
html.H1('plotly-example-demo'),
html.Hr(),
html.H2('Draggable'),
    plotly_example.Draggable(
        children=html.Div(id='some-div', children='this is draggable'),
        axis='both',
        className='draggable'
    )
])


if __name__ == '__main__':
    app.run_server(debug=True)
