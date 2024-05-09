URLS=[
"backtest/index.html",
"backtest/indicators/index.html",
"backtest/indicators/TA.html",
"backtest/indicators/indicator.html",
"backtest/indicators/indicatorSet.html",
"backtest/serve/index.html",
"backtest/serve/renderers/index.html",
"backtest/serve/renderers/email_renderer.html",
"backtest/serve/renderers/markup_renderer.html",
"backtest/serve/renderers/log_renderer.html",
"backtest/serve/renderers/html_renderer.html",
"backtest/serve/renderers/json_renderer.html",
"backtest/serve/renderers/pdf_renderer.html",
"backtest/serve/renderer.html",
"backtest/serve/job.html",
"backtest/engine/backtest.html",
"backtest/serve/stats_calculator.html",
"backtest/serve/state_signals.html",
"backtest/data/index.html",
"backtest/data/datapipe.html",
"backtest/data/pipes.html",
"backtest/data/utils.html",
"backtest/data/json_extension.html",
"backtest/engine/index.html",
"backtest/engine/metadata.html",
"backtest/engine/trade.html",
"backtest/engine/transaction.html",
"backtest/engine/strategy.html",
"backtest/engine/cashController.html",
"backtest/engine/tsData.html",
"backtest/engine/functional.html",
"backtest/engine/time_resolution_extenders.html",
"backtest/engine/backtestResult.html",
"backtest/engine/utils.html",
"backtest/engine/record.html",
"backtest/engine/broker.html",
"backtest/engine/portfolio.html",
"backtest/engine/analyser.html",
"backtest/engine/account.html"
];
INDEX=[
{
"ref":"backtest",
"url":0,
"doc":""
},
{
"ref":"backtest.indicators",
"url":1,
"doc":""
},
{
"ref":"backtest.indicators.TA",
"url":2,
"doc":""
},
{
"ref":"backtest.indicators.TA.ADX",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.ADXR",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.APO",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.AROON",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.AROONOSC",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.BOP",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.CCI",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.CMO",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.DX",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.TA.SMA",
"url":2,
"doc":"This SMA indicator support the streaming feature. If the previous_data is not None, the indicator will fill the missing values in the previous_data and return it. If the previous_data is None, it will calculate the indicator for the whole data.",
"func":1
},
{
"ref":"backtest.indicators.TA.EMA",
"url":2,
"doc":"This EMA indicator support the streaming feature. If the previous_data is not None, the indicator will fill the missing values in the previous_data and return it. If the previous_data is None, it will calculate the indicator for the whole data.",
"func":1
},
{
"ref":"backtest.indicators.TA.MACD",
"url":2,
"doc":"Data is a 2D numpy array with the shape (n, f) where n is the number of observations. The first 4 columns of the array are the OHLC data.",
"func":1
},
{
"ref":"backtest.indicators.indicator",
"url":3,
"doc":""
},
{
"ref":"backtest.indicators.indicator.Indicator",
"url":3,
"doc":"This class is a decorator designed to make an Indicator out of a function. Example: >>> @Indicator(out_feat=[\"SMA\"], period=int)  . def SMA(data: np.ndarray, index: List[str], features: List[str],  . previous_data: Optional[npt.NDArray[np.float32 , period: int = 10) -> np.ndarray:  .  . out = np.zeros(len(data), dtype=np.float32)  . for i in range(len(data) - period + 1):  . out[i] = data[i: i+period, 0].sum() / period  . return out[:, np.newaxis] >>>  Usage >>> series = pd.DataFrame(np.random.rand(1000), index=pd.date_range(start=\"2021-01-01\", periods=1000, freq=\"min\"), columns=[\"Close\"]) >>> indicator_10d = SMA() >>> indicator_20d = SMA(period=20) >>> out_10d = indicator_10d.get(series) >>> out_20d = indicator_20d.get(series) The indicator function receives the data as a 2D numpy array, the index as a list of datetimes (or string if jit compiled), the features as a list of strings, and any parameters set by the user. The function must return a 2D numpy array with the same length as the input data. Args:   -=  out_feat : The features name that this indicator will return. (Will be the column name in resulting df)  numba : Whether the function uses numba JIT compilation or not. If True, the index passed to the indicator logic will be a list of strings, otherwise a list of datetime objects.  name : The name of the indicator. If not set, the name of the function will be used.  expected_params : The expected parameters of the indicator. Used to validate the parameters passed to the indicator. "
},
{
"ref":"backtest.indicators.indicator.Indicator.set_callback",
"url":3,
"doc":"Set the callback method to be used when the indicator is called. Args:   -=  cb : The indicator logic Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.set_params",
"url":3,
"doc":"Set the parameters of the indicator. Args:   -=  params : The parameters set by the user Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.get",
"url":3,
"doc":"Run the indicator logic on the data and returns the result as a DataFrame. Args:   -=  data : The input dataframe with a datetime index. (Usually the chart)  previous_values : The previous values of the indicator. (Used when streaming the indicator) Returns:     - : The indicator results as a dataframe",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.out",
"url":3,
"doc":" Returns:     - : The output features of the indicator"
},
{
"ref":"backtest.indicators.indicator.Indicator.run",
"url":3,
"doc":"This method can be overridden to implement the indicator logic. This method is called when the callback method is not set. Args:   -=  data : The input data as a 2d numpy array.  index : The index of the input data. (datetime if not compiled with numba or string if compiled  features : The features of the input data  previous_data : An array of the previous indicator results. The recent points in the array will be nan. These are the values to fill. This parameter is useful when streaming the indicator (more compute efficient, but not all indicators support it.)  params : Any parameters set by the user Returns:     - : A 2D array with the indicator results. Must be the same length as the input data.",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.name",
"url":3,
"doc":" Returns:     - : A unique name for the indicator. (The name of the function and its identifier if different from 0)"
},
{
"ref":"backtest.indicators.indicator.Indicator.type_name",
"url":3,
"doc":" Returns:     - : The name of the indicator type"
},
{
"ref":"backtest.indicators.indicator.Indicator.get_name_no_id",
"url":3,
"doc":" Returns:     - : The name of the indicator without the identifier",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.get_args",
"url":3,
"doc":" Returns:     - : The arguments of the indicator as a string",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.set_id",
"url":3,
"doc":"Set the identifier of the indicator. Used to identify the indicator in the indicator set when there are multiple indicators with the same name. Args:   -=  new : The new id Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicatorSet",
"url":4,
"doc":""
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet",
"url":4,
"doc":" Args:   -=  indicators : Indicators passed as arguments  streaming : Whether to use the streaming capabilities of the indicators or not. (Note that if true, indicators will have the choice to use it or not.) Streaming can improve backtest run time. This parameter is handled in the Backtest object. "
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.add",
"url":4,
"doc":"Add an indicator or list of indicators to the IndicatorSet. Args:   -=  indicators : A single indicator or a list of indicators Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.run_all",
"url":4,
"doc":"Run all the indicators in the IndicatorSet on the data and return the results as a DataFrame. It concatenates the input data with the results of the indicators. (The index should be a datetime index) Args:   -=  data : A dataframe containing the previously calculated values of the indicators. (Used when streaming) If streaming is False, this parameter is ignored. This should be a dataframe with the same index as the data. This means that the indicators points that needs to be calculated should be nan, and one already calculated should be the previously calculated values. The columns should be the output columns names of the indicators. Returns:     - : The data concatenated with the indicator results",
"func":1
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.indicators",
"url":4,
"doc":"Get the indicators in the IndicatorSet as a dictionary with the indicator name as the key. IF there are multiple indicators with the same name, the name of the indicator will be appended with a number. Example, if I have two SMA, the first one will be SMA_1, and the second one SMA_2 Returns:     - : The dictionary of indicators"
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.streaming",
"url":4,
"doc":" Returns:     - : Whether the IndicatorSet is set to use streaming capabilities or not."
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.out",
"url":4,
"doc":" Returns:     - : The name of the columns added to the chart"
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.toList",
"url":4,
"doc":"Convert the IndicatorSet to a list of string representations of the indicators. Returns:     - : List of string representations of the indicators",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator",
"url":3,
"doc":"This class is a decorator designed to make an Indicator out of a function. Example: >>> @Indicator(out_feat=[\"SMA\"], period=int)  . def SMA(data: np.ndarray, index: List[str], features: List[str],  . previous_data: Optional[npt.NDArray[np.float32 , period: int = 10) -> np.ndarray:  .  . out = np.zeros(len(data), dtype=np.float32)  . for i in range(len(data) - period + 1):  . out[i] = data[i: i+period, 0].sum() / period  . return out[:, np.newaxis] >>>  Usage >>> series = pd.DataFrame(np.random.rand(1000), index=pd.date_range(start=\"2021-01-01\", periods=1000, freq=\"min\"), columns=[\"Close\"]) >>> indicator_10d = SMA() >>> indicator_20d = SMA(period=20) >>> out_10d = indicator_10d.get(series) >>> out_20d = indicator_20d.get(series) The indicator function receives the data as a 2D numpy array, the index as a list of datetimes (or string if jit compiled), the features as a list of strings, and any parameters set by the user. The function must return a 2D numpy array with the same length as the input data. Args:   -=  out_feat : The features name that this indicator will return. (Will be the column name in resulting df)  numba : Whether the function uses numba JIT compilation or not. If True, the index passed to the indicator logic will be a list of strings, otherwise a list of datetime objects.  name : The name of the indicator. If not set, the name of the function will be used.  expected_params : The expected parameters of the indicator. Used to validate the parameters passed to the indicator. "
},
{
"ref":"backtest.indicators.indicator.Indicator.set_callback",
"url":3,
"doc":"Set the callback method to be used when the indicator is called. Args:   -=  cb : The indicator logic Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.set_params",
"url":3,
"doc":"Set the parameters of the indicator. Args:   -=  params : The parameters set by the user Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.get",
"url":3,
"doc":"Run the indicator logic on the data and returns the result as a DataFrame. Args:   -=  data : The input dataframe with a datetime index. (Usually the chart)  previous_values : The previous values of the indicator. (Used when streaming the indicator) Returns:     - : The indicator results as a dataframe",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.out",
"url":3,
"doc":" Returns:     - : The output features of the indicator"
},
{
"ref":"backtest.indicators.indicator.Indicator.run",
"url":3,
"doc":"This method can be overridden to implement the indicator logic. This method is called when the callback method is not set. Args:   -=  data : The input data as a 2d numpy array.  index : The index of the input data. (datetime if not compiled with numba or string if compiled  features : The features of the input data  previous_data : An array of the previous indicator results. The recent points in the array will be nan. These are the values to fill. This parameter is useful when streaming the indicator (more compute efficient, but not all indicators support it.)  params : Any parameters set by the user Returns:     - : A 2D array with the indicator results. Must be the same length as the input data.",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.name",
"url":3,
"doc":" Returns:     - : A unique name for the indicator. (The name of the function and its identifier if different from 0)"
},
{
"ref":"backtest.indicators.indicator.Indicator.type_name",
"url":3,
"doc":" Returns:     - : The name of the indicator type"
},
{
"ref":"backtest.indicators.indicator.Indicator.get_name_no_id",
"url":3,
"doc":" Returns:     - : The name of the indicator without the identifier",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.get_args",
"url":3,
"doc":" Returns:     - : The arguments of the indicator as a string",
"func":1
},
{
"ref":"backtest.indicators.indicator.Indicator.set_id",
"url":3,
"doc":"Set the identifier of the indicator. Used to identify the indicator in the indicator set when there are multiple indicators with the same name. Args:   -=  new : The new id Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet",
"url":4,
"doc":" Args:   -=  indicators : Indicators passed as arguments  streaming : Whether to use the streaming capabilities of the indicators or not. (Note that if true, indicators will have the choice to use it or not.) Streaming can improve backtest run time. This parameter is handled in the Backtest object. "
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.add",
"url":4,
"doc":"Add an indicator or list of indicators to the IndicatorSet. Args:   -=  indicators : A single indicator or a list of indicators Returns:     - : None",
"func":1
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.run_all",
"url":4,
"doc":"Run all the indicators in the IndicatorSet on the data and return the results as a DataFrame. It concatenates the input data with the results of the indicators. (The index should be a datetime index) Args:   -=  data : A dataframe containing the previously calculated values of the indicators. (Used when streaming) If streaming is False, this parameter is ignored. This should be a dataframe with the same index as the data. This means that the indicators points that needs to be calculated should be nan, and one already calculated should be the previously calculated values. The columns should be the output columns names of the indicators. Returns:     - : The data concatenated with the indicator results",
"func":1
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.indicators",
"url":4,
"doc":"Get the indicators in the IndicatorSet as a dictionary with the indicator name as the key. IF there are multiple indicators with the same name, the name of the indicator will be appended with a number. Example, if I have two SMA, the first one will be SMA_1, and the second one SMA_2 Returns:     - : The dictionary of indicators"
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.streaming",
"url":4,
"doc":" Returns:     - : Whether the IndicatorSet is set to use streaming capabilities or not."
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.out",
"url":4,
"doc":" Returns:     - : The name of the columns added to the chart"
},
{
"ref":"backtest.indicators.indicatorSet.IndicatorSet.toList",
"url":4,
"doc":"Convert the IndicatorSet to a list of string representations of the indicators. Returns:     - : List of string representations of the indicators",
"func":1
},
{
"ref":"backtest.serve",
"url":5,
"doc":""
},
{
"ref":"backtest.serve.renderers",
"url":6,
"doc":""
},
{
"ref":"backtest.serve.renderers.email_renderer",
"url":7,
"doc":""
},
{
"ref":"backtest.serve.renderers.email_renderer.format_lim",
"url":7,
"doc":"Replace a with N/A if a is None. Else, it returns the float with a $ sign. Args:   -=  a : Float Returns:     - : str",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer",
"url":7,
"doc":"It renders only the trading signals in a html file. As opposed to the HTMLRenderer which renders the performances, the portfolio and other useful stats, this renderer is more lightweight and is designed to be sent by email. This being said, it is designed to be viewed on mobile devices. It also looks good on desktop though. The three styles are: - light: A light theme - dark: A dark theme (Darcula style) - rich: Another dark theme with another color palette Args:   -=  template_path : The path to the template directory. The directory should contain a file named main.htmlIt should also contain a directory named components that contains all the components that will be used in themain template. The css files used as themes should be in the main directory or in a styles subdirectory. Thenames of the files are used as the theme names. Same thing for the scripts. "
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render",
"url":7,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.log_renderer",
"url":9,
"doc":""
},
{
"ref":"backtest.serve.renderers.log_renderer.LogRenderer",
"url":9,
"doc":"Append signals to a log file. (csv format) The columns are: - timestamp - security - signal_type - price_lower_limit - price_upper_limit - n_shares - n_shares_borrowed - expiry"
},
{
"ref":"backtest.serve.renderers.log_renderer.LogRenderer.render",
"url":9,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer",
"url":10,
"doc":""
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer",
"url":10,
"doc":"It expects that the tradeSignals object contains the index data, the tickers data and the main idx of the tickers data. Stats are calculated based on a year of data except when specified all-time. In that case, the stats are calculated from the first data point to the last. The three styles are: - light: A light theme - dark: A dark theme (Darcula style) - rich: Another dark theme with another color palette Args:   -=  template_path : The path to the template directory. The directory should contain a file named main.htmlIt should also contain a directory named components that contains all the components that will be used in themain template. The css files used as themes should be in the main directory or in a styles subdirectory. Thenames of the files are used as the theme names. Same thing for the scripts. "
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render",
"url":10,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.json_renderer",
"url":11,
"doc":""
},
{
"ref":"backtest.serve.renderers.json_renderer.JSONRenderer",
"url":11,
"doc":"This renderer render the signals in JSON format. You can also store the portfolio state, the broker state and the account state in the json. Args:   -=  sub_dir : The sub directory where the json file will be stored.  store_portfolio : Whether to store the portfolio state in the json.  store_broker : Whether to store the broker state in the json.  store_account : Whether to store the account state in the json. "
},
{
"ref":"backtest.serve.renderers.json_renderer.JSONRenderer.render",
"url":11,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer",
"url":12,
"doc":""
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage",
"url":12,
"doc":"Class representing a page in a PDF document. It can contain multiple children objects. It is possible to append a component to the page with the append method. Once the page is built, it can be rendered to a string with the render method. Args:   -=  template : The template file as a string. Can be a full markup file or a component.  format_ : This is a regex expression that should contain only one '. ?'. It corresponds to the key thatwill be replaced by the data when the render method is called. "
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage.append",
"url":12,
"doc":"Append a child object to the page. The child objects must be pre-rendered before calling this method. Call the object and gives it the necessary data to render before appending it to the page. Args:   -=  obj : The object to append to the page Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage.render",
"url":12,
"doc":"Render the template with the given data. If no data is provided, it will use the kwargs. If no kwargs are provided, it will use the data that was saved with the __call__ method. Args:   -=  data : The data to use to render the template  kwargs : It is also possible to pass the data as kwargs Returns:     - : The rendered template as a string Raises:   -=  RuntimeError : If a key is defined in the template, but not in the data ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage.extract_keys",
"url":8,
"doc":"Extracts the keys from the template Args:   -=  template : string  format_ : The format string that contains the key Returns:     - A set of keys",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc",
"url":12,
"doc":"Class representing a PDF document. It can contain multiple pages, a header and footer. It is possible to add a new page with the new_page method. The document can be rendered to a string with the render method. Args:   -=  template : The template file as a string. Can be a full markup file or a component.  format_ : This is a regex expression that should contain only one '. ?'. It corresponds to the key thatwill be replaced by the data when the render method is called. "
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc.new_page",
"url":12,
"doc":"Creates a new page and returns a reference to it. Returns:     - : The new page object",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc.render",
"url":12,
"doc":"Render the template with the given data. If no data is provided, it will use the kwargs. If no kwargs are provided, it will use the data that was saved with the __call__ method. Args:   -=  data : The data to use to render the template  kwargs : It is also possible to pass the data as kwargs Returns:     - : The rendered template as a string Raises:   -=  RuntimeError : If a key is defined in the template, but not in the data ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc.extract_keys",
"url":8,
"doc":"Extracts the keys from the template Args:   -=  template : string  format_ : The format string that contains the key Returns:     - A set of keys",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer",
"url":12,
"doc":"Renders a report with the same information as the HTML renderer, but in a PDF format. The three styles are: - light: A light theme - dark: A dark theme (Darcula style) - rich: Another dark theme with another color palette Args:   -=  report_title : The title of the report  style : The theme of the report. Can be \"light\", \"dark\" or \"rich\" "
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render",
"url":12,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer",
"url":8,
"doc":""
},
{
"ref":"backtest.serve.renderers.markup_renderer.format_number",
"url":8,
"doc":"Formats a number to a string with a fixed number of decimals. It also put spaces every 3 digits for big numbers. Example: 11235.4242 -> \"11 235.42\"",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupObject",
"url":8,
"doc":" Args:   -=  template : The template file as a string. Can be a full markup file or a component.  format_ : This is a regex expression that should contain only one '. ?'. It corresponds to the key thatwill be replaced by the data when the render method is called. "
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupObject.extract_keys",
"url":8,
"doc":"Extracts the keys from the template Args:   -=  template : string  format_ : The format string that contains the key Returns:     - A set of keys",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupObject.render",
"url":8,
"doc":"Render the template with the given data. If no data is provided, it will use the kwargs. If no kwargs are provided, it will use the data that was saved with the __call__ method. Args:   -=  data : The data to use to render the template  kwargs : It is also possible to pass the data as kwargs Returns:     - : The rendered template as a string Raises:   -=  RuntimeError : If a key is defined in the template, but not in the data ",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer",
"url":8,
"doc":"Class designed to facilitate the creation of custom reports builder based on html. It includes a set of method that helps extract the relevant data from the state object and render components in a hierarchical manner. Note: This class is not as flexible and easy to use as I would like it to be so it may change in the near future. The class is designed to be derived from. The user should implement the render method to render the final report. Currently, this class can only build single file html reports(, or pdf with a pdf renderer.) How to use: 1. Create a new class that inherits from this class. 2. Implement the render method. Example: Check the html renderer or the email renderer for examples. Args:   -=  template_path : The path to the template directory. The directory should contain a file named main.htmlIt should also contain a directory named components that contains all the components that will be used in themain template. The css files used as themes should be in the main directory or in a styles subdirectory. Thenames of the files are used as the theme names. Same thing for the scripts. "
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render",
"url":13,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer",
"url":7,
"doc":"It renders only the trading signals in a html file. As opposed to the HTMLRenderer which renders the performances, the portfolio and other useful stats, this renderer is more lightweight and is designed to be sent by email. This being said, it is designed to be viewed on mobile devices. It also looks good on desktop though. The three styles are: - light: A light theme - dark: A dark theme (Darcula style) - rich: Another dark theme with another color palette Args:   -=  template_path : The path to the template directory. The directory should contain a file named main.htmlIt should also contain a directory named components that contains all the components that will be used in themain template. The css files used as themes should be in the main directory or in a styles subdirectory. Thenames of the files are used as the theme names. Same thing for the scripts. "
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render",
"url":7,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.email_renderer.EmailRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.log_renderer.LogRenderer",
"url":9,
"doc":"Append signals to a log file. (csv format) The columns are: - timestamp - security - signal_type - price_lower_limit - price_upper_limit - n_shares - n_shares_borrowed - expiry"
},
{
"ref":"backtest.serve.renderers.log_renderer.LogRenderer.render",
"url":9,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer",
"url":10,
"doc":"It expects that the tradeSignals object contains the index data, the tickers data and the main idx of the tickers data. Stats are calculated based on a year of data except when specified all-time. In that case, the stats are calculated from the first data point to the last. The three styles are: - light: A light theme - dark: A dark theme (Darcula style) - rich: Another dark theme with another color palette Args:   -=  template_path : The path to the template directory. The directory should contain a file named main.htmlIt should also contain a directory named components that contains all the components that will be used in themain template. The css files used as themes should be in the main directory or in a styles subdirectory. Thenames of the files are used as the theme names. Same thing for the scripts. "
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render",
"url":10,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.html_renderer.HTMLRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.json_renderer.JSONRenderer",
"url":11,
"doc":"This renderer render the signals in JSON format. You can also store the portfolio state, the broker state and the account state in the json. Args:   -=  sub_dir : The sub directory where the json file will be stored.  store_portfolio : Whether to store the portfolio state in the json.  store_broker : Whether to store the broker state in the json.  store_account : Whether to store the account state in the json. "
},
{
"ref":"backtest.serve.renderers.json_renderer.JSONRenderer.render",
"url":11,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage",
"url":12,
"doc":"Class representing a page in a PDF document. It can contain multiple children objects. It is possible to append a component to the page with the append method. Once the page is built, it can be rendered to a string with the render method. Args:   -=  template : The template file as a string. Can be a full markup file or a component.  format_ : This is a regex expression that should contain only one '. ?'. It corresponds to the key thatwill be replaced by the data when the render method is called. "
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage.append",
"url":12,
"doc":"Append a child object to the page. The child objects must be pre-rendered before calling this method. Call the object and gives it the necessary data to render before appending it to the page. Args:   -=  obj : The object to append to the page Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage.render",
"url":12,
"doc":"Render the template with the given data. If no data is provided, it will use the kwargs. If no kwargs are provided, it will use the data that was saved with the __call__ method. Args:   -=  data : The data to use to render the template  kwargs : It is also possible to pass the data as kwargs Returns:     - : The rendered template as a string Raises:   -=  RuntimeError : If a key is defined in the template, but not in the data ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFPage.extract_keys",
"url":8,
"doc":"Extracts the keys from the template Args:   -=  template : string  format_ : The format string that contains the key Returns:     - A set of keys",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc",
"url":12,
"doc":"Class representing a PDF document. It can contain multiple pages, a header and footer. It is possible to add a new page with the new_page method. The document can be rendered to a string with the render method. Args:   -=  template : The template file as a string. Can be a full markup file or a component.  format_ : This is a regex expression that should contain only one '. ?'. It corresponds to the key thatwill be replaced by the data when the render method is called. "
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc.new_page",
"url":12,
"doc":"Creates a new page and returns a reference to it. Returns:     - : The new page object",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc.render",
"url":12,
"doc":"Render the template with the given data. If no data is provided, it will use the kwargs. If no kwargs are provided, it will use the data that was saved with the __call__ method. Args:   -=  data : The data to use to render the template  kwargs : It is also possible to pass the data as kwargs Returns:     - : The rendered template as a string Raises:   -=  RuntimeError : If a key is defined in the template, but not in the data ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFDoc.extract_keys",
"url":8,
"doc":"Extracts the keys from the template Args:   -=  template : string  format_ : The format string that contains the key Returns:     - A set of keys",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer",
"url":12,
"doc":"Renders a report with the same information as the HTML renderer, but in a PDF format. The three styles are: - light: A light theme - dark: A dark theme (Darcula style) - rich: Another dark theme with another color palette Args:   -=  report_title : The title of the report  style : The theme of the report. Can be \"light\", \"dark\" or \"rich\" "
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render",
"url":12,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.pdf_renderer.PDFRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupObject",
"url":8,
"doc":" Args:   -=  template : The template file as a string. Can be a full markup file or a component.  format_ : This is a regex expression that should contain only one '. ?'. It corresponds to the key thatwill be replaced by the data when the render method is called. "
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupObject.extract_keys",
"url":8,
"doc":"Extracts the keys from the template Args:   -=  template : string  format_ : The format string that contains the key Returns:     - A set of keys",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupObject.render",
"url":8,
"doc":"Render the template with the given data. If no data is provided, it will use the kwargs. If no kwargs are provided, it will use the data that was saved with the __call__ method. Args:   -=  data : The data to use to render the template  kwargs : It is also possible to pass the data as kwargs Returns:     - : The rendered template as a string Raises:   -=  RuntimeError : If a key is defined in the template, but not in the data ",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer",
"url":8,
"doc":"Class designed to facilitate the creation of custom reports builder based on html. It includes a set of method that helps extract the relevant data from the state object and render components in a hierarchical manner. Note: This class is not as flexible and easy to use as I would like it to be so it may change in the near future. The class is designed to be derived from. The user should implement the render method to render the final report. Currently, this class can only build single file html reports(, or pdf with a pdf renderer.) How to use: 1. Create a new class that inherits from this class. 2. Implement the render method. Example: Check the html renderer or the email renderer for examples. Args:   -=  template_path : The path to the template directory. The directory should contain a file named main.htmlIt should also contain a directory named components that contains all the components that will be used in themain template. The css files used as themes should be in the main directory or in a styles subdirectory. Thenames of the files are used as the theme names. Same thing for the scripts. "
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_style",
"url":8,
"doc":"Load any stylesheet that is in the 'template_path' main directory, or in a styles subdirectory. Args:   -=  name : The name of the file without the .css. It should be in the main directory or in the styles subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_script",
"url":8,
"doc":"Load any script that is in the 'template_path' main directory, or in a scripts subdirectory. Args:   -=  name : The name of the file without the .js. It should be in the main directory or in the scripts subdirectory. Returns:     - : The text in the file.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.prerender",
"url":8,
"doc":"Render the component with the given data. It stores internally the rendered component. By default, if a component depends on another component that hasn't been rendered, it is assumed that the component was optional, and it will be rendered as an empty string (ignored). Args:   -=  component : The component name  kwargs : The data to render the component Returns:     - : The rendered component (text)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render_template",
"url":8,
"doc":"Render the main template with the given data. It will automatically map pre-rendered components to their corresponding tag in the template. By default, if a component is required to render the main template, but hasn't been rendered, the component will be rendered as an empty string (ignored). Args:   -=  kwargs : The data to add that isn't in the components. Returns:     - : The rendered template as a string.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_performance_data",
"url":8,
"doc":"Build a series of the portfolio worth and the index worth for easier comparison. Args:   -=  state : The StateSignals object  cutoff_delta : The amount of time before which the data is not considered. Returns:     - : The historical worth of the portfolio for the given period (cutoff_days) and the historical worth of theindex for the same period, the name of the index took. (In case there are more than 1, only one is used)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.prepare_data",
"url":8,
"doc":"Extracts the relevant up-to-date data (current timestep) from the state object and returns it as an array with the corresponding security names. Returns:     - : The security names and the data as a numpy array. The data is in the shape (n, 4) where n is thenumber of securities and the 4 columns are the OHLC data.",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.get_ticker_info",
"url":8,
"doc":"Extracts performance data for a given ticker. It calculates the change in dollars, the change in percent and the current value. Returns:     - The change in dollars, the change in percent and its current value",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render_portfolio",
"url":8,
"doc":"Renders a position as a html row [str]. The columns are: Ticker, Average_buy_price, Quantity, Change ($), Change (%), Unrealized P&L ($), Unrealized P&L (%) Args:   -=  position : The position object  ticker_info : The performance data for the ticker Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render_signal",
"url":8,
"doc":"Renders a signal as a html row [str] The columns are: Timestamp, Ticker, Signal type, Price limit low, Price limit high, Quantity, Quantity borrowed, Expiry. Args:   -=  signal : The signal object Returns:     - : The rendered row as a string",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.chart_builder",
"url":8,
"doc":"Build a performance chart comparing the strategy performance with the index performance. Args:   -=  portfolio_worth : An array of the portfolio worth  porfolio_timestamps : The corresponding timestamps  index_worth : An array of the index worth  index_timestamps : The corresponding timestamps  dark_theme : Whether to use a theme meant for dark backgrounds or not  index_name : The name of the index. Used as a label in the chart. Returns:     - : The chart object. (plotly figure)",
"func":1
},
{
"ref":"backtest.serve.renderers.markup_renderer.MarkupRenderer.render",
"url":13,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderer",
"url":13,
"doc":""
},
{
"ref":"backtest.serve.renderer.Renderer",
"url":13,
"doc":"This class is designed to convert a StateSignals object into a file or multiple files. The goal of exporting a StateSignals object is to be able to visualize the data in a human-readable format or to export it into a program-readable format (example: JSON, CSV, etc) for further processing. The class can be used as a decorator or derived. The derived class must implement the render method. Example: The first example is deriving the class and implementing the render method. >>> from backtest.serve import Renderer >>> class MyRenderer(Renderer):  . def render(self, state: StateSignals, base_path: PurePath):  . print(f\"Rendering {state} to {base_path}\") The second example is using the class as a decorator. >>> from backtest.serve import Renderer >>> @Renderer()  . def my_renderer(state: StateSignals, base_path: PurePath):  . print(f\"Rendering {state} to {base_path}\")"
},
{
"ref":"backtest.serve.renderer.Renderer.render",
"url":13,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderer.RendererList",
"url":13,
"doc":"A class that have the same structure as a Renderer, but it contains a list of renderers. This class is used to combine multiple renderers into a single renderer. When the render method is called, it will call the render method of each renderer in the list. Note: The order of the renderers in the list is kept."
},
{
"ref":"backtest.serve.renderer.RendererList.render",
"url":13,
"doc":"Run multiple renderers with the given state and base path. Args:   -=  state : The state and signals to render  base_path : The root path to store the rendered files Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.job",
"url":14,
"doc":""
},
{
"ref":"backtest.serve.job.Job",
"url":14,
"doc":"This class is designed to run a strategy in inference mode. It is derived from the backtest class to keep as much similarity as possible. The main difference is that the Job class will not run the strategy in a loop, but will run it once and return the signals. It is designed to be used in a server environment where the strategy will be run on a schedule. (Cron schedule or with the schedule module) Overall mechanism: The Job class receives as parameter a datapipe. When the job class is run, it starts by fetching the data from the datapipe. It then prepares the data as it is prepared in the backtest class. It then runs the strategy on the data and records the signals emitted by the strategy. It builds a StateSignals object with the signals and the state of the system (i.e. the account, the broker, the cash controller, etc.). It then calls the renderer. The renderer converts the StateSignals object into a file (or a set of files) that can be used to visualize the signals or be imported into an application. Finally, the Job class calls a trigger callback that can be used to trigger other actions such as sending a notification, buying or selling assets based on an api, etc. How to use: The Job class is designed to be run once a backtest has been completed (To see the performance expected by the strategy). Also, there are two ways to run the Job class. The first way is to call run the run_job method once in a while (Could be scheduled with a Cron job). The second way, is to pass a schedule.Job object to the run_job method and the script will run the job at the specified interval. In that case, the script never finishes. Example: The first example is designed to be run by a Cron job. The script will brun and exit. >>>  imports  . >>> data_pipe =  .  A data pipe that fetches the data >>> strategy =  .  A strategy object >>>  In case a backtest has been run prior to this, we pass the path to the backtest results. This way, the >>>  Job class will load the initial parameters from the backtest results. >>> job = Job(strategy, data_pipe, timedelta(days=1), result_path=\"path/to/backtest/result\", renderer= .,  . trigger_cb= .) >>>  In case a backtest hasn't been run, we pass the parameters directly to the Job class. >>>  The parameters are the parameters passed to the backtest class. Almost every parameters must be passed, >>>  because it doesn't have defaults. >>> job = Job(strategy, data_pipe, timedelta(days=1), params={\"initial_cash\": 10000, \"commission\": 0.01,  .},  . renderer= ., trigger_cb= .) >>> job.run_job() The second example is designed to be run in a loop. The script will run the job every day at 5pm. >>>  imports  . >>> data_pipe =  .  A data pipe that fetches the data >>> strategy =  .  A strategy object >>>  In case a backtest has been run prior to this, we pass the path to >>>  the backtest results. This way, the Job class will load the initial parameters from the backtest results. >>> job = Job(strategy, data_pipe, timedelta(days=1), result_path=\"path/to/backtest/result\", renderer= .,  . trigger_cb= .) >>>  In case a backtest hasn't been run, we pass the parameters directly to the Job class. >>>  The parameters are the parameters passed to the backtest class. Almost every parameters must be passed, >>>  because it doesn't have defaults. >>> job = Job(strategy, data_pipe, timedelta(days=1), params={\"initial_cash\": 10000, \"commission\": 0.01,  .},  . renderer= ., trigger_cb= .) >>> job.run_job(schedule.every().day.at(\"17:00\" Args:   -=  strategy : The strategy to use and extract signals from.  data : The data pipeline used to fetch the data for the strategy. It must return a list of dict of TSDatawhere position in the list are different time resolutions (like in the backtest) and the keys in the dict arethe tickers.  lookback : The lookback period to fetch the data. For example, let's say the lookback is 1y, the datafetched will be from (now - 1y) to now at every run.  result_path : The path to the backtest results. If this is provided, the Job class will load theparameters from the backtest results. If this is not provided, the Job class will load the parameters from theparams dictionary.  params : The parameters to use for the backtest. If the result_path is provided, this parameter isignored. The parameters are the same as the parameters passed to the backtest class. Almost every parametersmust be passed, because it doesn't have defaults. The parameters required are: - main_timestep: The main timestep to use for the backtest. - initial_cash: The initial cash to start the backtest. - commission: The commission to apply to the trades. - relative_commission: The relative commission to apply to the trades. - margin_interest: The margin interest to apply to the trades. - min_initial_margin: The minimum initial margin to apply to the trades. - min_maintenance_margin: The minimum maintenance margin to apply to the trades. - liquidation_delay: The liquidation delay to apply to the trades. - min_initial_margin_short: The minimum initial margin for short trades. - min_maintenance_margin_short: The minimum maintenance margin for short trades. - window: The window to use for the backtest. - default_marginable: The default marginable status used in the backtest. - default_shortable: The default shortable status used in the backtest. - default_short_rate: The default short rate used in the backtest. - risk_free_rate: The risk-free rate used in the backtest. - verbose: The verbosity level of the backtest.  index_pipe : A datapipe designed to fetch the index data. This is useful to compare the strategyperformance with the index performance. It must return a list of TSData objects. Although it is recommended touse only one reference index because the renderers are designed to render only one index, it is possible toreturn more than one. It is required that the time resolution of the index is the same as the main timeresolution.  working_directory : The working directory to use to export files. This will be considered as the root bythe renderers. For example, the prebuilt renderers will export their reports in the reports directory of theworking directory.  indicators : The same indicators used for the backtest.  trigger_cb : The trigger callback to call after the renderer has rendered the StateSignals.This callback is designed to trigger other actions like sending a notification, buying or selling assets basedon an api, etc.  renderer : A renderer object designed to convert the StateSignals object to an output file. The renderercan be a single renderer or a list of renderers (RendererList). The renderers are run in the same order as theyare in the list.  cash_controller : The cash controller used during the backtest.  time_res_extender : The time resolution extender used during the backtest. "
},
{
"ref":"backtest.serve.job.Job.run",
"url":14,
"doc":"Run the backtest simulation with the given data and strategy. It will show a progress bar showing the current progress. It will save the results and all the statistics into a BackTestResult object in the results attribute, or returned value of this method. Returns:     - : BackTestResult object containing all the results, statistics, debug info, etc.",
"func":1
},
{
"ref":"backtest.serve.job.Job.run_job",
"url":14,
"doc":"This method will run the job. If the every parameter is None, the job will run once and render the signals. If the every parameter is not None, the job will run at the specified interval and never return (never exit). Args:   -=  every : The interval to run the job. Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.job.Job.setup",
"url":14,
"doc":"This method will setup the backtest. It will load from cache, if it exists, the backtest state. Loading from cache the backtest state simulate a warm restart, (like the script has never stopped). If the script is runned in a cron job, so it exits after each run, and restarts at the next run, it wouldn't be able to remember the state of the job and would think it is always the first run. This is why the cache is used. It is used to remember the state of the job between runs. It is useful to remember the state to calulate the current statistics of the strategy. It will later be possible to compare the current performance with the backtest performances.",
"func":1
},
{
"ref":"backtest.serve.job.Job.pipeline",
"url":14,
"doc":"This method will run the whole pipeline. The steps of the pipeline are: 1. Fetch the data 2. Setup the Job. (Initialize the different variables) 3. Prepare the data 4. Run the cash controller 5. Run the broker (It will always be run on the previous timestep, i.e. lagging by one timestep) 6. Run the strategy 7. Save the state of the job for later warm restarts. 8. Package the signals and the state in a StateSignals object 9. Render the signals using the renderer 10. Call the trigger callback Args:   -=  now_override : A datetime object to override the current time. (Useful for testing in simulated environments) Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.job.Job.apply_indicators",
"url":15,
"doc":"Apply the indicators to the data (All tickers in time res) Args:   -=  data : The list of records to apply the indicators to  time_res_idx : The current time resolution  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The updated data",
"func":1
},
{
"ref":"backtest.serve.job.Job.run_indicator",
"url":15,
"doc":"Run the indicators on a single chart. Args:   -=  data : The chart data OHLCV  previous_data : The previously cached data. Used when streaming is True. If streaming is False, this parameter is ignored. This should be a dataframe with the same index as the data. This means that the indicators points that needs to be calculated should be nan, and one already calculated should be the previously calculated values. The columns names should be the output columns names of the indicators.  indicators : The indicatorSet to use.  streaming : Whether to use the streaming capabilities of the indicators or not.  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The new data",
"func":1
},
{
"ref":"backtest.serve.job.Job.stadardize_timesteps",
"url":15,
"doc":"Optionnaly reformat timesteps_list. Can be useful when indexes are variable across stocks Args:   -=  timesteps_list : The list of timesteps Returns:     - : The reformatted list of timesteps",
"func":1
},
{
"ref":"backtest.serve.job.Job.forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: (Read the warning below if your data contains higher resolution than main res) For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. IMPORTANT: If you need this method in your setup, you should override it since it may not work for your setup. In fact, it is hard to forge new candles for any arbitrary time resolution from discrete timeseries where timesteps might not correctly align. You should take this into account when making this method. TO OVERRIDE THIS METHOD: Just override it like any other method. You can also use the default method by calling 'self.default_forge_last_candle' and complement it. To suppress the warning, you can override this method by only calling the default 'self.default_forge_last_candle' Args:   -=  data : The data  prepared_data : The already prepared data.  current_time_res : The current time resolution  timestep : The current timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.serve.job.Job.default_forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. DO NOT OVERRIDE THIS METHOD: If you need to override a candle forging method, override the method 'forge_last_candle' instead. Args:   -=  data : The data  current_time_res : The current time resolution (to forge)  timestep : The current timestep  main_timestep : The main timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.serve.stats_calculator",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period",
"url":16,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.serve.stats_calculator.Period.YEARLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.QUARTERLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.MONTHLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.WEEKLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.DAILY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.HOURLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator",
"url":16,
"doc":"Class analog to the BacktestResults class. However, this class is used to calculate the stats in real time. It calculates the statistics based on a one-year moving window when possible. For some indicators, it is not possible because it would cause a difference in calculation of that metric between the inference and the backtest. Those metrics are marked as All-time in the comments."
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.prepare_data",
"url":16,
"doc":"Extracts the relevent up-to-date data from the state object and returns it as an array.",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.get_ohlc",
"url":16,
"doc":"Return a OHLC dataframe of the equity history corresponding to the period. Args:   -=  period : The period to use to make the OHLC dataframe Returns:     - : The OHLC dataframe",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.compute_sharp_ratio",
"url":16,
"doc":"Compute the sharp ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sharp ratio of the strategy",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.compute_sortino_ratio",
"url":16,
"doc":"Compute the sortino ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sortino ratio of the strategy",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.compute_calmar_ratio",
"url":16,
"doc":"Compute the calmar ratio of the strategy Args:   -=  yearly_max_drawdown : The yearly maximum drawdown of the strategy Returns:     - : The calmar ratio of the strategy",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.get_drawdown",
"url":16,
"doc":"Get the maximum drawdown of the strategy for each timestep (Causally - so looking back in time) Args:   -=  equity_history : The equity history of the strategy (Worth of the portoflio evolution over time)  equity_timestamps : The timestamps of the equity history  window : The lookback window to use to compute the drawdown Returns:     - : A time series of the maximum drawdown of the strategy for each time steps",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.strided_arr",
"url":16,
"doc":"Create a strided array to compute the rolling window of an array Args:   -=  a : The array  window : The window size Returns:     - : The strided array. Shape(len(a) - window + 1, window)",
"func":1
},
{
"ref":"backtest.serve.state_signals",
"url":17,
"doc":""
},
{
"ref":"backtest.serve.state_signals.ServerStatus",
"url":17,
"doc":"Used to indicate the status of the server after the strategy has been executed."
},
{
"ref":"backtest.serve.state_signals.ServerStatus.OK",
"url":17,
"doc":""
},
{
"ref":"backtest.serve.state_signals.ServerStatus.WARNING",
"url":17,
"doc":""
},
{
"ref":"backtest.serve.state_signals.ServerStatus.ERROR",
"url":17,
"doc":""
},
{
"ref":"backtest.serve.state_signals.StateSignals",
"url":17,
"doc":"Class that stores the signals given y the strategy for the current timestep and state of the account, the broker and the portfolio. Its more of a dataclass that stores the signals and the state of the account, broker and portfolio. It also has few method for easy access to the signals. Args:   -=  account : The account object  broker : The broker object  signals : The signals emitted by the strategy  strategy : The strategy object  timestamp : The current timestamp (i.e. the time at which the strategy was executed)  cash_controller : The cash controller object  initial_cash : The initial cash in the account (Useful to calculate the returns in a renderer)  index_data : The index data for the current timestamp. Same time-resolution as the main time resolution.  data : The data for the current timestamp.  main_idx : The index of the main time resolution in the data list.  backtest_params : The backtest parameters passed as a dictionary.  status : The server status after the strategy has been executed.  exception : An exception object if an exception was raised during the strategy execution.  warnings : Any warning objects that were raised during the strategy execution. "
},
{
"ref":"backtest.serve.state_signals.StateSignals.buy_long_signals",
"url":17,
"doc":"Returns the buy long signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.sell_long_signals",
"url":17,
"doc":"Returns the sell long signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.buy_short_signals",
"url":17,
"doc":"Returns the buy short signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.sell_short_signals",
"url":17,
"doc":"Returns the sell short signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.get",
"url":17,
"doc":"Returns the signal for the given ticker Args:   -=  item : The ticker to search for  default : The default value to return if no signals were emitted for the given ticker Returns:     - : The TradeOrder object or the default value",
"func":1
},
{
"ref":"backtest.serve.renderer.Renderer",
"url":13,
"doc":"This class is designed to convert a StateSignals object into a file or multiple files. The goal of exporting a StateSignals object is to be able to visualize the data in a human-readable format or to export it into a program-readable format (example: JSON, CSV, etc) for further processing. The class can be used as a decorator or derived. The derived class must implement the render method. Example: The first example is deriving the class and implementing the render method. >>> from backtest.serve import Renderer >>> class MyRenderer(Renderer):  . def render(self, state: StateSignals, base_path: PurePath):  . print(f\"Rendering {state} to {base_path}\") The second example is using the class as a decorator. >>> from backtest.serve import Renderer >>> @Renderer()  . def my_renderer(state: StateSignals, base_path: PurePath):  . print(f\"Rendering {state} to {base_path}\")"
},
{
"ref":"backtest.serve.renderer.Renderer.render",
"url":13,
"doc":"Renders the state and signals and save it to a file or multiple files inside the provided base path. Args:   -=  state : The state and signals to render  base_path : The base path to save the rendered files ",
"func":1
},
{
"ref":"backtest.serve.renderer.RendererList",
"url":13,
"doc":"A class that have the same structure as a Renderer, but it contains a list of renderers. This class is used to combine multiple renderers into a single renderer. When the render method is called, it will call the render method of each renderer in the list. Note: The order of the renderers in the list is kept."
},
{
"ref":"backtest.serve.renderer.RendererList.render",
"url":13,
"doc":"Run multiple renderers with the given state and base path. Args:   -=  state : The state and signals to render  base_path : The root path to store the rendered files Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.job.Job",
"url":14,
"doc":"This class is designed to run a strategy in inference mode. It is derived from the backtest class to keep as much similarity as possible. The main difference is that the Job class will not run the strategy in a loop, but will run it once and return the signals. It is designed to be used in a server environment where the strategy will be run on a schedule. (Cron schedule or with the schedule module) Overall mechanism: The Job class receives as parameter a datapipe. When the job class is run, it starts by fetching the data from the datapipe. It then prepares the data as it is prepared in the backtest class. It then runs the strategy on the data and records the signals emitted by the strategy. It builds a StateSignals object with the signals and the state of the system (i.e. the account, the broker, the cash controller, etc.). It then calls the renderer. The renderer converts the StateSignals object into a file (or a set of files) that can be used to visualize the signals or be imported into an application. Finally, the Job class calls a trigger callback that can be used to trigger other actions such as sending a notification, buying or selling assets based on an api, etc. How to use: The Job class is designed to be run once a backtest has been completed (To see the performance expected by the strategy). Also, there are two ways to run the Job class. The first way is to call run the run_job method once in a while (Could be scheduled with a Cron job). The second way, is to pass a schedule.Job object to the run_job method and the script will run the job at the specified interval. In that case, the script never finishes. Example: The first example is designed to be run by a Cron job. The script will brun and exit. >>>  imports  . >>> data_pipe =  .  A data pipe that fetches the data >>> strategy =  .  A strategy object >>>  In case a backtest has been run prior to this, we pass the path to the backtest results. This way, the >>>  Job class will load the initial parameters from the backtest results. >>> job = Job(strategy, data_pipe, timedelta(days=1), result_path=\"path/to/backtest/result\", renderer= .,  . trigger_cb= .) >>>  In case a backtest hasn't been run, we pass the parameters directly to the Job class. >>>  The parameters are the parameters passed to the backtest class. Almost every parameters must be passed, >>>  because it doesn't have defaults. >>> job = Job(strategy, data_pipe, timedelta(days=1), params={\"initial_cash\": 10000, \"commission\": 0.01,  .},  . renderer= ., trigger_cb= .) >>> job.run_job() The second example is designed to be run in a loop. The script will run the job every day at 5pm. >>>  imports  . >>> data_pipe =  .  A data pipe that fetches the data >>> strategy =  .  A strategy object >>>  In case a backtest has been run prior to this, we pass the path to >>>  the backtest results. This way, the Job class will load the initial parameters from the backtest results. >>> job = Job(strategy, data_pipe, timedelta(days=1), result_path=\"path/to/backtest/result\", renderer= .,  . trigger_cb= .) >>>  In case a backtest hasn't been run, we pass the parameters directly to the Job class. >>>  The parameters are the parameters passed to the backtest class. Almost every parameters must be passed, >>>  because it doesn't have defaults. >>> job = Job(strategy, data_pipe, timedelta(days=1), params={\"initial_cash\": 10000, \"commission\": 0.01,  .},  . renderer= ., trigger_cb= .) >>> job.run_job(schedule.every().day.at(\"17:00\" Args:   -=  strategy : The strategy to use and extract signals from.  data : The data pipeline used to fetch the data for the strategy. It must return a list of dict of TSDatawhere position in the list are different time resolutions (like in the backtest) and the keys in the dict arethe tickers.  lookback : The lookback period to fetch the data. For example, let's say the lookback is 1y, the datafetched will be from (now - 1y) to now at every run.  result_path : The path to the backtest results. If this is provided, the Job class will load theparameters from the backtest results. If this is not provided, the Job class will load the parameters from theparams dictionary.  params : The parameters to use for the backtest. If the result_path is provided, this parameter isignored. The parameters are the same as the parameters passed to the backtest class. Almost every parametersmust be passed, because it doesn't have defaults. The parameters required are: - main_timestep: The main timestep to use for the backtest. - initial_cash: The initial cash to start the backtest. - commission: The commission to apply to the trades. - relative_commission: The relative commission to apply to the trades. - margin_interest: The margin interest to apply to the trades. - min_initial_margin: The minimum initial margin to apply to the trades. - min_maintenance_margin: The minimum maintenance margin to apply to the trades. - liquidation_delay: The liquidation delay to apply to the trades. - min_initial_margin_short: The minimum initial margin for short trades. - min_maintenance_margin_short: The minimum maintenance margin for short trades. - window: The window to use for the backtest. - default_marginable: The default marginable status used in the backtest. - default_shortable: The default shortable status used in the backtest. - default_short_rate: The default short rate used in the backtest. - risk_free_rate: The risk-free rate used in the backtest. - verbose: The verbosity level of the backtest.  index_pipe : A datapipe designed to fetch the index data. This is useful to compare the strategyperformance with the index performance. It must return a list of TSData objects. Although it is recommended touse only one reference index because the renderers are designed to render only one index, it is possible toreturn more than one. It is required that the time resolution of the index is the same as the main timeresolution.  working_directory : The working directory to use to export files. This will be considered as the root bythe renderers. For example, the prebuilt renderers will export their reports in the reports directory of theworking directory.  indicators : The same indicators used for the backtest.  trigger_cb : The trigger callback to call after the renderer has rendered the StateSignals.This callback is designed to trigger other actions like sending a notification, buying or selling assets basedon an api, etc.  renderer : A renderer object designed to convert the StateSignals object to an output file. The renderercan be a single renderer or a list of renderers (RendererList). The renderers are run in the same order as theyare in the list.  cash_controller : The cash controller used during the backtest.  time_res_extender : The time resolution extender used during the backtest. "
},
{
"ref":"backtest.serve.job.Job.run",
"url":14,
"doc":"Run the backtest simulation with the given data and strategy. It will show a progress bar showing the current progress. It will save the results and all the statistics into a BackTestResult object in the results attribute, or returned value of this method. Returns:     - : BackTestResult object containing all the results, statistics, debug info, etc.",
"func":1
},
{
"ref":"backtest.serve.job.Job.run_job",
"url":14,
"doc":"This method will run the job. If the every parameter is None, the job will run once and render the signals. If the every parameter is not None, the job will run at the specified interval and never return (never exit). Args:   -=  every : The interval to run the job. Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.job.Job.setup",
"url":14,
"doc":"This method will setup the backtest. It will load from cache, if it exists, the backtest state. Loading from cache the backtest state simulate a warm restart, (like the script has never stopped). If the script is runned in a cron job, so it exits after each run, and restarts at the next run, it wouldn't be able to remember the state of the job and would think it is always the first run. This is why the cache is used. It is used to remember the state of the job between runs. It is useful to remember the state to calulate the current statistics of the strategy. It will later be possible to compare the current performance with the backtest performances.",
"func":1
},
{
"ref":"backtest.serve.job.Job.pipeline",
"url":14,
"doc":"This method will run the whole pipeline. The steps of the pipeline are: 1. Fetch the data 2. Setup the Job. (Initialize the different variables) 3. Prepare the data 4. Run the cash controller 5. Run the broker (It will always be run on the previous timestep, i.e. lagging by one timestep) 6. Run the strategy 7. Save the state of the job for later warm restarts. 8. Package the signals and the state in a StateSignals object 9. Render the signals using the renderer 10. Call the trigger callback Args:   -=  now_override : A datetime object to override the current time. (Useful for testing in simulated environments) Returns:     - : None",
"func":1
},
{
"ref":"backtest.serve.job.Job.apply_indicators",
"url":15,
"doc":"Apply the indicators to the data (All tickers in time res) Args:   -=  data : The list of records to apply the indicators to  time_res_idx : The current time resolution  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The updated data",
"func":1
},
{
"ref":"backtest.serve.job.Job.run_indicator",
"url":15,
"doc":"Run the indicators on a single chart. Args:   -=  data : The chart data OHLCV  previous_data : The previously cached data. Used when streaming is True. If streaming is False, this parameter is ignored. This should be a dataframe with the same index as the data. This means that the indicators points that needs to be calculated should be nan, and one already calculated should be the previously calculated values. The columns names should be the output columns names of the indicators.  indicators : The indicatorSet to use.  streaming : Whether to use the streaming capabilities of the indicators or not.  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The new data",
"func":1
},
{
"ref":"backtest.serve.job.Job.stadardize_timesteps",
"url":15,
"doc":"Optionnaly reformat timesteps_list. Can be useful when indexes are variable across stocks Args:   -=  timesteps_list : The list of timesteps Returns:     - : The reformatted list of timesteps",
"func":1
},
{
"ref":"backtest.serve.job.Job.forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: (Read the warning below if your data contains higher resolution than main res) For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. IMPORTANT: If you need this method in your setup, you should override it since it may not work for your setup. In fact, it is hard to forge new candles for any arbitrary time resolution from discrete timeseries where timesteps might not correctly align. You should take this into account when making this method. TO OVERRIDE THIS METHOD: Just override it like any other method. You can also use the default method by calling 'self.default_forge_last_candle' and complement it. To suppress the warning, you can override this method by only calling the default 'self.default_forge_last_candle' Args:   -=  data : The data  prepared_data : The already prepared data.  current_time_res : The current time resolution  timestep : The current timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.serve.job.Job.default_forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. DO NOT OVERRIDE THIS METHOD: If you need to override a candle forging method, override the method 'forge_last_candle' instead. Args:   -=  data : The data  current_time_res : The current time resolution (to forge)  timestep : The current timestep  main_timestep : The main timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.Period",
"url":16,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.serve.stats_calculator.Period.YEARLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.QUARTERLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.MONTHLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.WEEKLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.DAILY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.Period.HOURLY",
"url":16,
"doc":""
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator",
"url":16,
"doc":"Class analog to the BacktestResults class. However, this class is used to calculate the stats in real time. It calculates the statistics based on a one-year moving window when possible. For some indicators, it is not possible because it would cause a difference in calculation of that metric between the inference and the backtest. Those metrics are marked as All-time in the comments."
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.prepare_data",
"url":16,
"doc":"Extracts the relevent up-to-date data from the state object and returns it as an array.",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.get_ohlc",
"url":16,
"doc":"Return a OHLC dataframe of the equity history corresponding to the period. Args:   -=  period : The period to use to make the OHLC dataframe Returns:     - : The OHLC dataframe",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.compute_sharp_ratio",
"url":16,
"doc":"Compute the sharp ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sharp ratio of the strategy",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.compute_sortino_ratio",
"url":16,
"doc":"Compute the sortino ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sortino ratio of the strategy",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.compute_calmar_ratio",
"url":16,
"doc":"Compute the calmar ratio of the strategy Args:   -=  yearly_max_drawdown : The yearly maximum drawdown of the strategy Returns:     - : The calmar ratio of the strategy",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.get_drawdown",
"url":16,
"doc":"Get the maximum drawdown of the strategy for each timestep (Causally - so looking back in time) Args:   -=  equity_history : The equity history of the strategy (Worth of the portoflio evolution over time)  equity_timestamps : The timestamps of the equity history  window : The lookback window to use to compute the drawdown Returns:     - : A time series of the maximum drawdown of the strategy for each time steps",
"func":1
},
{
"ref":"backtest.serve.stats_calculator.StatCalculator.strided_arr",
"url":16,
"doc":"Create a strided array to compute the rolling window of an array Args:   -=  a : The array  window : The window size Returns:     - : The strided array. Shape(len(a) - window + 1, window)",
"func":1
},
{
"ref":"backtest.serve.state_signals.ServerStatus",
"url":17,
"doc":"Used to indicate the status of the server after the strategy has been executed."
},
{
"ref":"backtest.serve.state_signals.ServerStatus.OK",
"url":17,
"doc":""
},
{
"ref":"backtest.serve.state_signals.ServerStatus.WARNING",
"url":17,
"doc":""
},
{
"ref":"backtest.serve.state_signals.ServerStatus.ERROR",
"url":17,
"doc":""
},
{
"ref":"backtest.serve.state_signals.StateSignals",
"url":17,
"doc":"Class that stores the signals given y the strategy for the current timestep and state of the account, the broker and the portfolio. Its more of a dataclass that stores the signals and the state of the account, broker and portfolio. It also has few method for easy access to the signals. Args:   -=  account : The account object  broker : The broker object  signals : The signals emitted by the strategy  strategy : The strategy object  timestamp : The current timestamp (i.e. the time at which the strategy was executed)  cash_controller : The cash controller object  initial_cash : The initial cash in the account (Useful to calculate the returns in a renderer)  index_data : The index data for the current timestamp. Same time-resolution as the main time resolution.  data : The data for the current timestamp.  main_idx : The index of the main time resolution in the data list.  backtest_params : The backtest parameters passed as a dictionary.  status : The server status after the strategy has been executed.  exception : An exception object if an exception was raised during the strategy execution.  warnings : Any warning objects that were raised during the strategy execution. "
},
{
"ref":"backtest.serve.state_signals.StateSignals.buy_long_signals",
"url":17,
"doc":"Returns the buy long signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.sell_long_signals",
"url":17,
"doc":"Returns the sell long signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.buy_short_signals",
"url":17,
"doc":"Returns the buy short signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.sell_short_signals",
"url":17,
"doc":"Returns the sell short signals"
},
{
"ref":"backtest.serve.state_signals.StateSignals.get",
"url":17,
"doc":"Returns the signal for the given ticker Args:   -=  item : The ticker to search for  default : The default value to return if no signals were emitted for the given ticker Returns:     - : The TradeOrder object or the default value",
"func":1
},
{
"ref":"backtest.data",
"url":18,
"doc":"Module to manage complex data pipelines."
},
{
"ref":"backtest.data.datapipe",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.toHash",
"url":19,
"doc":"Hash an object. The hash is consistent across runs and is deterministic given the object. Note: This function doesn't support all types of objects. This function is recursive and will hash the object recursively. Args:   -=  obj : The object to has Returns:     - : The object hash",
"func":1
},
{
"ref":"backtest.data.datapipe.CacheObject",
"url":19,
"doc":"This class holds a the output of a pipe and some metadata to be able to revalidate the cache. Args:   -=  value : The output of the pipe  pipe_id : The pipe_id of the pipe that generated the cache  pipe_hash : Used to check if the pipe structure has changed  next_revalidate : The next time the cache should be revalidated  max_request : The maximum number of requests that can be made before revalidating the cache  current_n_requests : The current number of requests made to the cache "
},
{
"ref":"backtest.data.datapipe.CacheObject.store",
"url":19,
"doc":"Call this method to store the cache to the .cache folder. The cache file has the pipe_id as its name. This is why it is strongly recommended to delete the .cache folder when changing the pipeline structure, to avoid unexpected behavior.",
"func":1
},
{
"ref":"backtest.data.datapipe.CacheObject.load",
"url":19,
"doc":"Call this method to load a cache from the .cache folder. Args:   -=  pipe_id : The pipe_id that stored the cache Returns:     - : The cache object if it exists else None. (This function doesn't check if the cache valid)",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipeType",
"url":19,
"doc":"[Enum] - An enumeration representing the four types of pipes that can be used in the pipeline. - FETCH: Fetch data from an external source (Web, DB, file, API, etc.). - PROCESS: Process and transform the data (Filter, transform, etc.). - CACHE: Cache the output of the pipeline to avoid repeating previous steps on each run. - COLLATE: Collate the output of two pipes (This is a special case, used to merge two pipelines)."
},
{
"ref":"backtest.data.datapipe.DataPipeType.FETCH",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipeType.PROCESS",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipeType.CACHE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipeType.COLLATE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.PipeOutput",
"url":19,
"doc":"This class holds the output of a pipe and some metadata that are passed through out the pipeline. This metadata is used for revalidation purpose. Args: value: The value output_from: The output from the pipe revalidate_action: The revalidate action  kwargs:"
},
{
"ref":"backtest.data.datapipe.PipeOutput.set_revalidate",
"url":19,
"doc":"Set the revalidate action of the pipe. Args:   -=  action : The action to set Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.PipeOutput.set_output_from",
"url":19,
"doc":"Set the output_from of the pipe. Can be useful when a pip makes a copy of the output of another pipe. Args:   -=  output_from : The pipe that generated the output Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.PipeOutput.value",
"url":19,
"doc":"The output of the pipe Returns:     - : The output value of the pipe"
},
{
"ref":"backtest.data.datapipe.PipeOutput.revalidate",
"url":19,
"doc":"Get the revalidate action of the pipe Returns:     - : The revalidate action of the pipe"
},
{
"ref":"backtest.data.datapipe.RevalidateAction",
"url":19,
"doc":"The three possible revalidation action that a pipe can return. - REVALIDATE: Revalidate the cache from the current position to the end of the pipeline - FULL_REVALIDATE: Revalidate the cache from the beginning to the end of the pipeline - NOOP: Do not revalidate the cache (The pipe will load from cache if it exists)"
},
{
"ref":"backtest.data.datapipe.RevalidateAction.REVALIDATE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.RevalidateAction.FULL_REVALIDATE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.RevalidateAction.NOOP",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipe",
"url":19,
"doc":"The base element of the data module api. This object can represent the four types of pipes (Fetch, Process, Cache, and Collate). It is a recursive object that can be used to build complex pipelines. The pipeline is built using the pipe operator (|). Once the pipeline is built, it is run by calling the get method. To make custom pipes, you need to inherit from this class and implement one of the three methods (fetch, process, collate). If you want to implement a cache pipe, you need to implement the load, cache and revalidate methods. Do not forget to call the super().__init__ method in the __init__ method of your custom pipe and pass the appropriate DataPipeType. You can also pass a name to the pipe to make the pipeline more readable. Args:   -=  T : The pipe type (Fetch, Process, Cache, Collate)  name : The pipe name. If None, the name of the class is used "
},
{
"ref":"backtest.data.datapipe.DataPipe.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.datapipe.DataPipe.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes",
"url":20,
"doc":""
},
{
"ref":"backtest.data.pipes.Fetch",
"url":20,
"doc":"Function decorator designed to make a Fetch pipe out of a function. It is designed to fetch data from a source. The source can be a database, a web API, a file, etc. The pipe is named after the function name. Args:   -=  cb : The fetch callback method. "
},
{
"ref":"backtest.data.pipes.Fetch.fetch",
"url":20,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Fetch.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes.Process",
"url":20,
"doc":"Function decorator designed to make a Process pipe out of a function. It is designed to process data. The data can be transformed, cleaned, imputed, etc. The pipe is named after the function name. Args:   -=  cb : The process callback method. "
},
{
"ref":"backtest.data.pipes.Process.process",
"url":20,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Process.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Process.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Process.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Process.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Process.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Process.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Process.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes.Collate",
"url":20,
"doc":"Function decorator designed to make a Collate pipe out of a function. It is designed to collate data. The data can be combined, aggregated, concatenated, etc. The pipe is named after the function name. Args:   -=  cb : The collate callback method. "
},
{
"ref":"backtest.data.pipes.Collate.collate",
"url":20,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Collate.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes.Cache",
"url":20,
"doc":"Function decorator designed to make a Cache pipe out of a function. The decorated function is expected to be the caching method. When using this, it is recommended to pass a load callback method to load the cache object from the storage. The caching method should be able to store the cache and load it from the storage. The cache object should be a CacheObject instance. It is also possible to pass a revalidate callback method to define a dynamic revalidate action. The revalidate action is a method that returns a RevalidateAction enum value. The revalidate action is used to determine if the cache should be revalidated or not. If no revalidate method is passed, the default revalidate method check if the cache is expired given an expired datetime, a timeout or a maximum number of requests. Note:  If timeout is None, max_requests is None and revalidate_cb is None, the cache will never be revalidated.  If the structure of the underlying pipe changes or the parameters of the underlying pipe changes, the whole pipeline will be revalidated (full revalidation). This means that every cache pipe will revalidate their cache, not only the one that changed. Examples: >>> @Cache(loading_cb=JSON_load, store=True, timeout=timedelta(seconds=1  . def MyCache(frm: datetime, to: datetime,  args, po: PipeOutput, pipe_id: int, revalidate: datetime,  . timedelta, max_requests: int, n_requests: int,  kwargs):  . value = {  . \"data\": po.value,  . \"stored_dt\": datetime.now().isoformat(),  . \"revalidate\": revalidate.isoformat(),  . \"current_n_requests\": n_requests,  . \"timeout\": timeout.total_seconds(),  . \"max_requests\": max_requests  . }  . if not os.path.exists(\".cache\"):  . os.mkdir(\".cache\")  . with open(f\".cache/{pipe_id}.json\", \"w\") as f:  . json.dump(value, f) >>>  The cache pipe can also be used as is: >>> pipe = FetchN | Cache(timeout=timedelta(seconds=1 Args:   -=  caching_cb : The callback that is called after the pipeline wrapped by the Cache pipe is executed. It is used to store the cache.  loading_cb : The callback used to load the cache from the disk.  revalidate : The next datetime to revalidate the cache.  timeout : A timedelta object representing the max age of the cache before revalidating it. If it is oneday, the cache will be revalidated every day as opposed to the revalidate parameter, which revalidate only once.  max_requests : The maximum number of request that hit the cache before revalidating it.  store : Whether to store the cache on disk or keep it only in memory.  revalidate_cb : A callback method that returns a RevalidateAction enum value. It is used to determine ifthe cache should be revalidated or not. This callback can be provided for complex revalidation logic. "
},
{
"ref":"backtest.data.pipes.Cache.cache",
"url":20,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.load",
"url":20,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.revalidate",
"url":20,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Cache.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.utils",
"url":21,
"doc":""
},
{
"ref":"backtest.data.utils.JSONCacheObject",
"url":21,
"doc":"This class holds a the output of a pipe and some metadata to be able to revalidate the cache. Args:   -=  value : The output of the pipe  pipe_id : The pipe_id of the pipe that generated the cache  pipe_hash : Used to check if the pipe structure has changed  next_revalidate : The next time the cache should be revalidated  max_request : The maximum number of requests that can be made before revalidating the cache  current_n_requests : The current number of requests made to the cache "
},
{
"ref":"backtest.data.utils.JSONCacheObject.store",
"url":21,
"doc":"Call this method to store the cache to the .cache folder. The cache file has the pipe_id as its name. This is why it is strongly recommended to delete the .cache folder when changing the pipeline structure, to avoid unexpected behavior.",
"func":1
},
{
"ref":"backtest.data.utils.JSONCacheObject.load",
"url":21,
"doc":"Call this method to load a cache from the .cache folder. Args:   -=  pipe_id : The pipe_id that stored the cache Returns:     - : The cache object if it exists else None. (This function doesn't check if the cache valid)",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache",
"url":21,
"doc":"This pipe will cache the data as a JSON file instead of a pickle file. This class uses an extended JSON encoder and decoder to encode most datatypes. However, the encoded version might be suboptimal. To make objects JSON serializable, you can add a __tojson__ method that returns a JSONable dictionary to your object. To make it loadable, you can add a __fromjson__ class method that takes a JSONable dictionary and returns an instance of your object. Args:   -=  revalidate : The datetime to revalidate the cache  timeout : The timedelta at which the cache will expire and be revalidated periodically  max_requests : The maximum number of request before revaidating the cache  store : Whether to store on disk or only in memory  revalidate_cb : A revalidate callback function to implement a custom revalidation mechanism  custom_types : The custom types to add to the JSONEncoder and JSONDecoder to make them JSON serializableand loadable. Every type that implemented the __tojson__ and __fromjson__ methods should be registered here. "
},
{
"ref":"backtest.data.utils.JSONCache.cache",
"url":21,
"doc":"This method is called to cache the data. This emthod will cache the data to the json format, and save it to the disk. It will also save as pickle the automatically detected types. Args:   -=  frm : Start Datetime  to : End Datetime  args : Any arguments passed to the pipeline  po : The previous PipeOutput  kwargs : Any keyword arguments passed to the pipeline Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.load",
"url":21,
"doc":"This method is called to load the cache. This method will load the cache from the disk, and return the CacheObject. If the cache is not found, it will return None. Returns:     - : JSONCacheObject if cache is found and None otherwise",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.revalidate",
"url":20,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.utils.JSONCache.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts",
"url":21,
"doc":"This pipe will fetch the charts from Yahoo Finance. It will fetch the charts for the specified tickers and the specified interval. The interval can be any interval supported by yfinance. The data will be returned as a dictionary of DataFrames where the keys are the tickers and the values are the DataFrames. The columns of the returned dataframes are the following: Open, High, Low, Close, Volume, Dividends, Stock Splits. The index is named \"Date\" for intervals of 1d and longer and \"Datetime\" for intervals shorter than 1d. The index is a datetime index. If the returned chart is empty, it will be returned as None. Consider removing the None charts in further preprocessing steps. Warning: The returned index contains timezone information that might be inconsistent. Consider removing them.  IN: Optional[List[str : The list of tickers to fetch the charts for. If provided, it will override the ticker list passed during initialization.  OUT: dict[str, Optional[pd.DataFrame  where the values are the charts and the keys are the tickers Args:   -=  T : The pipe type (Fetch, Process, Cache, Collate)  name : The pipe name. If None, the name of the class is used "
},
{
"ref":"backtest.data.utils.FetchCharts.fetch",
"url":21,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.utils.FetchCharts.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.utils.FilterNoneCharts",
"url":21,
"doc":"This pipe will filter out the tickers that doesn't have a chart. (Chart is None)  IN: dict[str, Optional[pd.DataFrame  where the values are the charts and the keys are the tickers  OUT: dict[str, pd.DataFrame] where the values are the charts and the keys are the tickers Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output  kwargs : The keyword arguments passed to the pipe Returns:     - :",
"func":1
},
{
"ref":"backtest.data.utils.ToTSData",
"url":21,
"doc":"This pipe will convert the charts into a time series object (TSData).  IN: dict[str, pd.DataFrame] where the values are the charts and the keys are the tickers  OUT: list[dict[str, TSData  where the values are the TSData and the keys are the tickers (len of list = 1) Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output  kwargs : The keyword arguments passed to the pipe Returns:     - : pd.DataFrame",
"func":1
},
{
"ref":"backtest.data.utils.CausalImpute",
"url":21,
"doc":"This pipe will impute the missing values in the time series data using the causal imputation method. (It will copy the last time step value to the missing values) Example: a = [1, 2, 3, nan, 5, 6, nan, 8, 9] causal_impute(a) -> [1, 2, 3, 3, 5, 6, 6, 8, 9]  IN: dict[str, pd.Dataframe] where the values are the charts as Dataframe and the keys are the tickers  OUT: dict[str, TSData] where the values are the TSData and the keys are the tickers Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output  kwargs : The keyword arguments passed to the pipe Returns:     - : pd.DataFrame",
"func":1
},
{
"ref":"backtest.data.utils.PadNan",
"url":21,
"doc":"This pipe will pad the charts (dataframes) with NaNs. It will reindex them with the longest index found in the data. The index will be the same for all the charts.  IN: dict[str, Optional[pd.DataFrame  where the values are the charts and the keys are the tickers  OUT: dict[str, pd.DataFrame] where the values are the charts and the keys are the tickers, but the charts are all the same length, and padded with Nans. Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output. Must be a dictionary of charts (ticker, pd.DataFrame)  kwargs : The keyword arguments passed to the pipe Returns:     - : pd.DataFrame",
"func":1
},
{
"ref":"backtest.data.json_extension",
"url":22,
"doc":""
},
{
"ref":"backtest.data.json_extension.add_types",
"url":22,
"doc":"Add new types supported by extended json encoder/decoder. The type will be serialized using the __tojson__ method. (Must exist in the object) and deserialized using the __fromjson__ class method. Args:   -=  types : A dictionary of types to add to the JSONEncoder [str: class] ",
"func":1
},
{
"ref":"backtest.data.json_extension.remove_types",
"url":22,
"doc":"Remove supported types from the extended json encoder/decoder. The type will be serialized using the __tojson__ method. (Must exist in the object) and deserialized using the __fromjson__ class method. Args:   -=  types : A list of types to remove from the JSONEncoder [str] ",
"func":1
},
{
"ref":"backtest.data.json_extension.get_detected_types",
"url":22,
"doc":"Get the types that have been automatically detected by the JSONEncoder. Returns:     - : A dictionary of detected types [str: class]",
"func":1
},
{
"ref":"backtest.data.json_extension.add_detected_types",
"url":22,
"doc":"Load the detected types into the JSONDecoder. Can be useful to restor the state of the module Args:   -=  types : A dictionary of types to add to the JSONDecoder [str: class] ",
"func":1
},
{
"ref":"backtest.data.json_extension.set_detected_types",
"url":22,
"doc":"Load the detected types into the JSONDecoder. Can be useful to restor the state of the module Args:   -=  types : A dictionary of types to add to the JSONDecoder [str: class] ",
"func":1
},
{
"ref":"backtest.data.json_extension.JSONEncoder",
"url":22,
"doc":"This class extends the JSONEncoder class from the json module to handle the serialization of a variety of objects. If your object isn't serialized properly, you can add a __json__ method to your object to handle the serialization and return a jsonable dictionary.  The types supported by default are: - int - float - str - list - tuple - dict - bool - None - pd.DataFrame - np.ndarray - np.int64 - np.float64 - np.bool_ - np.datetime64 - np.timedelta64 - datetime - timedelta - date - time - pd.Series - Enum - Any object with a __dict__ attribute - Any object that is iterable If you want to add a custom serializer to your object, you can add a __tojson__ method to your object that returns a dictionary that can be serialized. To be able to deserialize the object, you must also add a __fromjson__ class method that takes the dictionary and returns the object. In order fo the Serializer to use those method, you must first register the class using the add_types function. Example: >>> from backtest.data import json_extension as je >>> class MyClass:  . def __init__(self, a, b):  . self.a = a  . self.b = b  . def __tojson__(self):  . return {\"a\": self.a, \"b\": self.b}  . @classmethod  . def __fromjson__(cls, d):  . return cls(d[\"a\"], d[\"b\"])  . def __repr__(self):  . return f\"MyClass({self.a}, {self.b})\"  . >>> je.add_types(MyClass) >>> obj = MyClass(1, 2) >>> print(json.dumps(obj, cls=je.JSONEncoder {\"__TYPE__\": \"MyClass\", \"data\": {\"a\": 1, \"b\": 2 >>>  To deserialize the object >>> d = '{\"__TYPE__\": \"MyClass\", \"data\": {\"a\": 1, \"b\": 2 ' >>> print(json.loads(d, cls=je.JSONDecoder MyClass(1, 2) >>>  To unregister a type, use the remove_types function >>> je.remove_types(MyClass) Constructor for JSONEncoder, with sensible defaults. If skipkeys is false, then it is a TypeError to attempt encoding of keys that are not str, int, float or None. If skipkeys is True, such items are simply skipped. If ensure_ascii is true, the output is guaranteed to be str objects with all incoming non-ASCII characters escaped. If ensure_ascii is false, the output can contain non-ASCII characters. If check_circular is true, then lists, dicts, and custom encoded objects will be checked for circular references during encoding to prevent an infinite recursion (which would cause an RecursionError). Otherwise, no such check takes place. If allow_nan is true, then NaN, Infinity, and -Infinity will be encoded as such. This behavior is not JSON specification compliant, but is consistent with most JavaScript based encoders and decoders. Otherwise, it will be a ValueError to encode such floats. If sort_keys is true, then the output of dictionaries will be sorted by key; this is useful for regression tests to ensure that JSON serializations can be compared on a day-to-day basis. If indent is a non-negative integer, then JSON array elements and object members will be pretty-printed with that indent level. An indent level of 0 will only insert newlines. None is the most compact representation. If specified, separators should be an (item_separator, key_separator) tuple. The default is (', ', ': ') if  indent is  None and (',', ': ') otherwise. To get the most compact JSON representation, you should specify (',', ':') to eliminate whitespace. If specified, default is a function that gets called for objects that can't otherwise be serialized. It should return a JSON encodable version of the object or raise a  TypeError ."
},
{
"ref":"backtest.data.json_extension.JSONEncoder.default",
"url":22,
"doc":"Implement this method in a subclass such that it returns a serializable object for  o , or calls the base implementation (to raise a  TypeError ). For example, to support arbitrary iterators, you could implement default like this def default(self, o): try: iterable = iter(o) except TypeError: pass else: return list(iterable)  Let the base class default method raise the TypeError return super().default(o)",
"func":1
},
{
"ref":"backtest.data.datapipe.CacheObject",
"url":19,
"doc":"This class holds a the output of a pipe and some metadata to be able to revalidate the cache. Args:   -=  value : The output of the pipe  pipe_id : The pipe_id of the pipe that generated the cache  pipe_hash : Used to check if the pipe structure has changed  next_revalidate : The next time the cache should be revalidated  max_request : The maximum number of requests that can be made before revalidating the cache  current_n_requests : The current number of requests made to the cache "
},
{
"ref":"backtest.data.datapipe.CacheObject.store",
"url":19,
"doc":"Call this method to store the cache to the .cache folder. The cache file has the pipe_id as its name. This is why it is strongly recommended to delete the .cache folder when changing the pipeline structure, to avoid unexpected behavior.",
"func":1
},
{
"ref":"backtest.data.datapipe.CacheObject.load",
"url":19,
"doc":"Call this method to load a cache from the .cache folder. Args:   -=  pipe_id : The pipe_id that stored the cache Returns:     - : The cache object if it exists else None. (This function doesn't check if the cache valid)",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipeType",
"url":19,
"doc":"[Enum] - An enumeration representing the four types of pipes that can be used in the pipeline. - FETCH: Fetch data from an external source (Web, DB, file, API, etc.). - PROCESS: Process and transform the data (Filter, transform, etc.). - CACHE: Cache the output of the pipeline to avoid repeating previous steps on each run. - COLLATE: Collate the output of two pipes (This is a special case, used to merge two pipelines)."
},
{
"ref":"backtest.data.datapipe.DataPipeType.FETCH",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipeType.PROCESS",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipeType.CACHE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipeType.COLLATE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.PipeOutput",
"url":19,
"doc":"This class holds the output of a pipe and some metadata that are passed through out the pipeline. This metadata is used for revalidation purpose. Args: value: The value output_from: The output from the pipe revalidate_action: The revalidate action  kwargs:"
},
{
"ref":"backtest.data.datapipe.PipeOutput.set_revalidate",
"url":19,
"doc":"Set the revalidate action of the pipe. Args:   -=  action : The action to set Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.PipeOutput.set_output_from",
"url":19,
"doc":"Set the output_from of the pipe. Can be useful when a pip makes a copy of the output of another pipe. Args:   -=  output_from : The pipe that generated the output Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.PipeOutput.value",
"url":19,
"doc":"The output of the pipe Returns:     - : The output value of the pipe"
},
{
"ref":"backtest.data.datapipe.PipeOutput.revalidate",
"url":19,
"doc":"Get the revalidate action of the pipe Returns:     - : The revalidate action of the pipe"
},
{
"ref":"backtest.data.datapipe.RevalidateAction",
"url":19,
"doc":"The three possible revalidation action that a pipe can return. - REVALIDATE: Revalidate the cache from the current position to the end of the pipeline - FULL_REVALIDATE: Revalidate the cache from the beginning to the end of the pipeline - NOOP: Do not revalidate the cache (The pipe will load from cache if it exists)"
},
{
"ref":"backtest.data.datapipe.RevalidateAction.REVALIDATE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.RevalidateAction.FULL_REVALIDATE",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.RevalidateAction.NOOP",
"url":19,
"doc":""
},
{
"ref":"backtest.data.datapipe.DataPipe",
"url":19,
"doc":"The base element of the data module api. This object can represent the four types of pipes (Fetch, Process, Cache, and Collate). It is a recursive object that can be used to build complex pipelines. The pipeline is built using the pipe operator (|). Once the pipeline is built, it is run by calling the get method. To make custom pipes, you need to inherit from this class and implement one of the three methods (fetch, process, collate). If you want to implement a cache pipe, you need to implement the load, cache and revalidate methods. Do not forget to call the super().__init__ method in the __init__ method of your custom pipe and pass the appropriate DataPipeType. You can also pass a name to the pipe to make the pipeline more readable. Args:   -=  T : The pipe type (Fetch, Process, Cache, Collate)  name : The pipe name. If None, the name of the class is used "
},
{
"ref":"backtest.data.datapipe.DataPipe.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.datapipe.DataPipe.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.datapipe.DataPipe.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch",
"url":20,
"doc":"Function decorator designed to make a Fetch pipe out of a function. It is designed to fetch data from a source. The source can be a database, a web API, a file, etc. The pipe is named after the function name. Args:   -=  cb : The fetch callback method. "
},
{
"ref":"backtest.data.pipes.Fetch.fetch",
"url":20,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Fetch.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Fetch.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes.Process",
"url":20,
"doc":"Function decorator designed to make a Process pipe out of a function. It is designed to process data. The data can be transformed, cleaned, imputed, etc. The pipe is named after the function name. Args:   -=  cb : The process callback method. "
},
{
"ref":"backtest.data.pipes.Process.process",
"url":20,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Process.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Process.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Process.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Process.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Process.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Process.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Process.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Process.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes.Collate",
"url":20,
"doc":"Function decorator designed to make a Collate pipe out of a function. It is designed to collate data. The data can be combined, aggregated, concatenated, etc. The pipe is named after the function name. Args:   -=  cb : The collate callback method. "
},
{
"ref":"backtest.data.pipes.Collate.collate",
"url":20,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Collate.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Collate.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.pipes.Cache",
"url":20,
"doc":"Function decorator designed to make a Cache pipe out of a function. The decorated function is expected to be the caching method. When using this, it is recommended to pass a load callback method to load the cache object from the storage. The caching method should be able to store the cache and load it from the storage. The cache object should be a CacheObject instance. It is also possible to pass a revalidate callback method to define a dynamic revalidate action. The revalidate action is a method that returns a RevalidateAction enum value. The revalidate action is used to determine if the cache should be revalidated or not. If no revalidate method is passed, the default revalidate method check if the cache is expired given an expired datetime, a timeout or a maximum number of requests. Note:  If timeout is None, max_requests is None and revalidate_cb is None, the cache will never be revalidated.  If the structure of the underlying pipe changes or the parameters of the underlying pipe changes, the whole pipeline will be revalidated (full revalidation). This means that every cache pipe will revalidate their cache, not only the one that changed. Examples: >>> @Cache(loading_cb=JSON_load, store=True, timeout=timedelta(seconds=1  . def MyCache(frm: datetime, to: datetime,  args, po: PipeOutput, pipe_id: int, revalidate: datetime,  . timedelta, max_requests: int, n_requests: int,  kwargs):  . value = {  . \"data\": po.value,  . \"stored_dt\": datetime.now().isoformat(),  . \"revalidate\": revalidate.isoformat(),  . \"current_n_requests\": n_requests,  . \"timeout\": timeout.total_seconds(),  . \"max_requests\": max_requests  . }  . if not os.path.exists(\".cache\"):  . os.mkdir(\".cache\")  . with open(f\".cache/{pipe_id}.json\", \"w\") as f:  . json.dump(value, f) >>>  The cache pipe can also be used as is: >>> pipe = FetchN | Cache(timeout=timedelta(seconds=1 Args:   -=  caching_cb : The callback that is called after the pipeline wrapped by the Cache pipe is executed. It is used to store the cache.  loading_cb : The callback used to load the cache from the disk.  revalidate : The next datetime to revalidate the cache.  timeout : A timedelta object representing the max age of the cache before revalidating it. If it is oneday, the cache will be revalidated every day as opposed to the revalidate parameter, which revalidate only once.  max_requests : The maximum number of request that hit the cache before revalidating it.  store : Whether to store the cache on disk or keep it only in memory.  revalidate_cb : A callback method that returns a RevalidateAction enum value. It is used to determine ifthe cache should be revalidated or not. This callback can be provided for complex revalidation logic. "
},
{
"ref":"backtest.data.pipes.Cache.cache",
"url":20,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.load",
"url":20,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.revalidate",
"url":20,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.pipes.Cache.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.pipes.Cache.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache",
"url":21,
"doc":"This pipe will cache the data as a JSON file instead of a pickle file. This class uses an extended JSON encoder and decoder to encode most datatypes. However, the encoded version might be suboptimal. To make objects JSON serializable, you can add a __tojson__ method that returns a JSONable dictionary to your object. To make it loadable, you can add a __fromjson__ class method that takes a JSONable dictionary and returns an instance of your object. Args:   -=  revalidate : The datetime to revalidate the cache  timeout : The timedelta at which the cache will expire and be revalidated periodically  max_requests : The maximum number of request before revaidating the cache  store : Whether to store on disk or only in memory  revalidate_cb : A revalidate callback function to implement a custom revalidation mechanism  custom_types : The custom types to add to the JSONEncoder and JSONDecoder to make them JSON serializableand loadable. Every type that implemented the __tojson__ and __fromjson__ methods should be registered here. "
},
{
"ref":"backtest.data.utils.JSONCache.cache",
"url":21,
"doc":"This method is called to cache the data. This emthod will cache the data to the json format, and save it to the disk. It will also save as pickle the automatically detected types. Args:   -=  frm : Start Datetime  to : End Datetime  args : Any arguments passed to the pipeline  po : The previous PipeOutput  kwargs : Any keyword arguments passed to the pipeline Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.load",
"url":21,
"doc":"This method is called to load the cache. This method will load the cache from the disk, and return the CacheObject. If the cache is not found, it will return None. Returns:     - : JSONCacheObject if cache is found and None otherwise",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.revalidate",
"url":20,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.fetch",
"url":19,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.JSONCache.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.utils.JSONCache.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts",
"url":21,
"doc":"This pipe will fetch the charts from Yahoo Finance. It will fetch the charts for the specified tickers and the specified interval. The interval can be any interval supported by yfinance. The data will be returned as a dictionary of DataFrames where the keys are the tickers and the values are the DataFrames. The columns of the returned dataframes are the following: Open, High, Low, Close, Volume, Dividends, Stock Splits. The index is named \"Date\" for intervals of 1d and longer and \"Datetime\" for intervals shorter than 1d. The index is a datetime index. If the returned chart is empty, it will be returned as None. Consider removing the None charts in further preprocessing steps. Warning: The returned index contains timezone information that might be inconsistent. Consider removing them.  IN: Optional[List[str : The list of tickers to fetch the charts for. If provided, it will override the ticker list passed during initialization.  OUT: dict[str, Optional[pd.DataFrame  where the values are the charts and the keys are the tickers Args:   -=  T : The pipe type (Fetch, Process, Cache, Collate)  name : The pipe name. If None, the name of the class is used "
},
{
"ref":"backtest.data.utils.FetchCharts.fetch",
"url":21,
"doc":"This method is called to fetch the data from an external source. It is called by the _run method when the pipe is a fetch pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.get",
"url":19,
"doc":"Run the pipeline from the beginning to the end and return the output of the pipeline. Args:   -=  frm : From datetime, this is passed to all pipes and is used to fetch the data from this date to the 'to'date.  to : The end datetime, this is passed to all pipes and is used to fetch the data from the 'frm' date tothis date.  args : any args that needs to be passed to the subsequent pipes  kwargs : any keyword args that needs to be passed to the subsequent pipes Returns:     - : The output of the pipeline",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.hash",
"url":19,
"doc":"Make a hash that is consistent across runs and is deterministic given the object. Returns:     - : The hash.",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.Collate",
"url":19,
"doc":"This method is used to build a collate pipe from two pipes. It is used top merge two branches of a pipeline. Args:   -=  pipe1 : The first pipeline (or pipe if there is only one)  pipe2 : The second pipeline (or pipe if there is only one) Returns:     - : A new pipe that is the result of the concatenation of the two pipes. (Multiple pipes makes a pipeline)",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.set_id",
"url":19,
"doc":"With this method, it is possible to manually set the pipe_id of the pipe. It is recommended to call this method only on the top-level pipes, and before running the pipeline with get. If the pipe is not the top-level pipe, its pipe_id may change, and you might run in unexpected behaviors. By running this method only before running the get method, this ensures that the pipe will have the same pipe_id if the pipeline structure is the same. This is due to the fact that pipe_ids are dynamically assigned at build time. However, when the pipe is run, the pipe becomes forged and no changes are allowed. This ensures that the pipe ids stays the same. When this method is called, it acts as if the pipe was run, and the pipe_ids are frozen. This means that the ids aren't verified. Make sure that the pipe_id given are unique to avoid conflicts. Note: The passed pipe_id will be assigned to the lowes-level pipe. The current pipe will have the highest pipe_id Args:   -=  pipe_id : The pipe_id to assign to the pipe. Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.collate",
"url":19,
"doc":"This method is called to merge the output of two pipes. It is called by the _run method when the pipe is a collate pipe. Args:   -=  frm : From datetime  to : To datetime  args : any args passed to the get method  po1 : The output of the first pipeline (left)  po2 : The output of the second pipeline (right)  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.process",
"url":19,
"doc":"This method is called to process and transform the data. It is called by the _run method when the pipe is a process pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.cache",
"url":19,
"doc":"This method is called to cache the output of the pipeline. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : None",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.load",
"url":19,
"doc":"This method is called to load the cache from the disk. It is called by the _load_cache method when the pipe is a cache pipe. It will return the loaded cache object if found. Otherwise, it will return None. Returns:     - : CacheObject if found else None",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.revalidate",
"url":19,
"doc":"This method is called to revalidate the cache. It is called by the _run method when the pipe is a cache pipe. Args:   -=  frm : From datetime  to : To datetime  args : Any args passed to the get method  po : The pipe output of the previous pipe  kwargs : Any keyword args passed to the get method Returns:     - : A pipe output object that holds the output of the pipe and some metadata",
"func":1
},
{
"ref":"backtest.data.utils.FetchCharts.pipe_id",
"url":19,
"doc":"Get the pipe_id (Identifier unique to each pipe in the pipeline). It is given at built time and is deterministic. This means that each time the pipeline is built, the pipe_id will be the same for each pipe, given that the pipeline structure is the same. Returns:     - : The pipe_id"
},
{
"ref":"backtest.data.utils.FetchCharts.render",
"url":19,
"doc":"This method is used to render the pipeline as a string. It renders the pipe structure as a tree with each node being the name of the pipe. It is used by the __str__ method to render the pipeline as a tree. Returns:     - : The rendered pipeline as a string",
"func":1
},
{
"ref":"backtest.data.utils.FilterNoneCharts",
"url":21,
"doc":"This pipe will filter out the tickers that doesn't have a chart. (Chart is None)  IN: dict[str, Optional[pd.DataFrame  where the values are the charts and the keys are the tickers  OUT: dict[str, pd.DataFrame] where the values are the charts and the keys are the tickers Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output  kwargs : The keyword arguments passed to the pipe Returns:     - :",
"func":1
},
{
"ref":"backtest.data.utils.ToTSData",
"url":21,
"doc":"This pipe will convert the charts into a time series object (TSData).  IN: dict[str, pd.DataFrame] where the values are the charts and the keys are the tickers  OUT: list[dict[str, TSData  where the values are the TSData and the keys are the tickers (len of list = 1) Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output  kwargs : The keyword arguments passed to the pipe Returns:     - : pd.DataFrame",
"func":1
},
{
"ref":"backtest.data.utils.CausalImpute",
"url":21,
"doc":"This pipe will impute the missing values in the time series data using the causal imputation method. (It will copy the last time step value to the missing values) Example: a = [1, 2, 3, nan, 5, 6, nan, 8, 9] causal_impute(a) -> [1, 2, 3, 3, 5, 6, 6, 8, 9]  IN: dict[str, pd.Dataframe] where the values are the charts as Dataframe and the keys are the tickers  OUT: dict[str, TSData] where the values are the TSData and the keys are the tickers Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output  kwargs : The keyword arguments passed to the pipe Returns:     - : pd.DataFrame",
"func":1
},
{
"ref":"backtest.data.utils.PadNan",
"url":21,
"doc":"This pipe will pad the charts (dataframes) with NaNs. It will reindex them with the longest index found in the data. The index will be the same for all the charts.  IN: dict[str, Optional[pd.DataFrame  where the values are the charts and the keys are the tickers  OUT: dict[str, pd.DataFrame] where the values are the charts and the keys are the tickers, but the charts are all the same length, and padded with Nans. Args:   -=  frm : From datetime  to : to datetime  args : Args passed to the pipe  po : Previous Pipe output. Must be a dictionary of charts (ticker, pd.DataFrame)  kwargs : The keyword arguments passed to the pipe Returns:     - : pd.DataFrame",
"func":1
},
{
"ref":"backtest.engine",
"url":23,
"doc":"This module contains the logic to run the backtest."
},
{
"ref":"backtest.engine.metadata",
"url":24,
"doc":""
},
{
"ref":"backtest.engine.metadata.Metadata",
"url":24,
"doc":"This class is meant to contain all the information needed to reproduce the results of the backtest of a startegy Usually, the dataset must be big, so it is recomended to write in the description how to acquire the dataset,or make a script that download it and save the script. This class contains the metadata of the strategy. Args:   -=  strategy_name : The name of the strategy. If None, the name of the class will be used.  description : The description of the strategy. It is strongly recommended to write steps on how to reproduce the results here. If description is None, the docstring of the strategy will be used.  author : The author of the strategy. If None, the git author will be used.  version : The version of the strategy. If None, the git commit hash will be used. If no git repository, it will be \"Unknown\"  time_res : The time resolution. If None, the automatically found time resolution will be saved. It is the task of the broker to provide the time resolution. (Not handled in this class)  save_code : Whether to save the code of the strategy. If True, the code will be saved.  hash_only : Only used if save_code is True. If True, only the hash of the code will be saved. (It can spare storage space)  file_blacklist : Files to not include in the code saved. It is a list of strings with the file paths relative to the current working directory.  code_path : The path to the root folder where to search for the code. Default is the current working directory (If None). If no ' ' is present in the path, it will be added at the end to search for py files. "
},
{
"ref":"backtest.engine.metadata.Metadata.init",
"url":24,
"doc":"This method is used to initialize the metadata object from the Backtest object (When the simulation has started) Args:   -=  strategy : The strategy object. (Used to get its name  backtest_parameters : The parameters of the backtest object (Init paraeters)  tickers : The tickers used in the backtest  features : The features used in the backtest (Columns)  run_duration : The duration of the backtest (in seconds) Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.get_git_author",
"url":24,
"doc":"This method return the git author name. Returns:     - : git author name",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.load_code",
"url":24,
"doc":"This method load the code of the strategy. Args:   -=  path : The path to search for the code. Default is the current working directory. (And ignore venv)  checksum : Whether to return only the checksum of each file.  ignore : Files to ignore when loading the code. Returns:     - : The code of the strategy",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.get_git_commit",
"url":24,
"doc":"This method return the git commit hash. Returns:     - : git commit hash",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.export",
"url":24,
"doc":"This method export the metadata to a JSONable dictionary. Note: The file_blacklist parameter is not saved (and not loaded) for privacy purposes. Returns:     - : The state of the object as a dictionary",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.load",
"url":24,
"doc":"This method load the metadata from a dictionary. NOTE: The file_blacklist parameter is not loaded (and not saved) for privacy purposes. Args:   -=  data : The dictionary to load the metadata from. Returns:     - : The metadata object",
"func":1
},
{
"ref":"backtest.engine.trade",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeType",
"url":25,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.trade.TradeType.available",
"url":25,
"doc":"",
"func":1
},
{
"ref":"backtest.engine.trade.TradeType.BuyLong",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeType.SellLong",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeType.SellShort",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeType.BuyShort",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeOrder",
"url":25,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"backtest.engine.trade.TradeOrder.export",
"url":25,
"doc":"This method export the trade order object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.trade.TradeOrder.load",
"url":25,
"doc":"This method loads a trade order object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.trade.Trade",
"url":25,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"backtest.engine.trade.Trade.getCost",
"url":25,
"doc":"This method calculates the upfront cost of the trade. It ignores the cost of borrowing the securities. Note: It doesn't include transaction costs nor the cost of borrowing the securities. Returns:     - : The upfront cost of the trade",
"func":1
},
{
"ref":"backtest.engine.trade.Trade.export",
"url":25,
"doc":"This method export the trade object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.trade.Trade.load",
"url":25,
"doc":"This method loads a trade object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.transaction",
"url":26,
"doc":""
},
{
"ref":"backtest.engine.transaction.TransactionType",
"url":26,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.transaction.TransactionType.from_str",
"url":26,
"doc":"",
"func":1
},
{
"ref":"backtest.engine.transaction.TransactionType.DEPOSIT",
"url":26,
"doc":""
},
{
"ref":"backtest.engine.transaction.TransactionType.WITHDRAWAL",
"url":26,
"doc":""
},
{
"ref":"backtest.engine.transaction.Transaction",
"url":26,
"doc":"Data class"
},
{
"ref":"backtest.engine.transaction.Transaction.export",
"url":26,
"doc":"This method export the trade order object to a JSONable dictionary. Returns:     - : The object's state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.transaction.Transaction.load",
"url":26,
"doc":"This method load a Transaction object from a dictionary. Args:   -=  data : The dictionary to load from Returns:     - : The Transaction object",
"func":1
},
{
"ref":"backtest.engine.strategy",
"url":27,
"doc":""
},
{
"ref":"backtest.engine.strategy.Strategy",
"url":27,
"doc":"This is the base class of strategies. To create a strategy, you should inherit from this class and implement the run method. The run method is called at each time step to compute the strategy. You can also override the __init__ method to add attributes to the strategy. If you do so, you should also override the save and load methods to save the strategy in a different format (by default it is pickle). Warning: You should not override the init and the __call__ method. The init, and notice it doesn't have the underscores like __init__, is used to bind the strategy to the backtest object. This is done under the hood. The __call__ method is used to dispatch the data to the run method. Overriding it might ignore some safety checks or statistics calculations.  While implementing the run method: You SHOULD NOT change the state of the account, the portfolio or the broker with the exception of calling the methods below on the broker object. If you modify the state of one of these objects, you could encounter bugs and false backtest results. The only methods you should call on the broker object are: - broker.buy_long( .) - broker.sell_long( .) - broker.buy_short( .) - broker.sell_short( .) Attributes: account: The account object broker: The broker object available_time_res: The available time resolutions portfolio: The portfolio object (Alias of broker.portfolio) Example: >>> class MyStrategy(Strategy):  . def run(self, data, timestep):  . for ticker in data.main.tickers:  . chart = data.main[ticker].chart  . if len(chart) > 2 and F.crossover(chart[\"MACD\"], chart[\"MACD_SIGNAL\"]) and chart[\"MACD\"].iloc[-1] < 0:  . if ticker not in self.broker.portfolio.long:  . self.broker.buy_long(ticker, 500)  . if ticker in self.broker.portfolio.long and F.crossunder(chart[\"MACD\"], chart[\"MACD_SIGNAL\"]):  . self.broker.sell_long(ticker, 500)  ."
},
{
"ref":"backtest.engine.strategy.Strategy.init",
"url":27,
"doc":"YOU SHOULD NOT OVERRIDE THIS METHOD Args:   -=  account : The account object  broker : The broker object  available_time_res : The available time resolutions ",
"func":1
},
{
"ref":"backtest.engine.strategy.Strategy.run",
"url":27,
"doc":"This method is used to compute the strategy at each time step. It is in this method that the strategy logic is implemented. Args:   -=  data : The data to use for the strategy  timestep : The current time step ",
"func":1
},
{
"ref":"backtest.engine.strategy.Strategy.save",
"url":27,
"doc":"This method is used to save the state of the strategy to a file. If you would like to save in another format, you can override this method and the load method. Note: To avoid saving things twice, we set the account, broker and available_time_res to None before saving. Only the other attributes will be saved. (If any) Args:   -=  path : The path to save the strategy (.pkl) ",
"func":1
},
{
"ref":"backtest.engine.strategy.Strategy.load",
"url":27,
"doc":"This method is used to load the state of a strategy from a file. If you would like to save in an other format, you can override this method and the save method. Args:   -=  path : The path to load the strategy from. (.pkl) ",
"func":1
},
{
"ref":"backtest.engine.cashController",
"url":28,
"doc":""
},
{
"ref":"backtest.engine.cashController.CashControllerBase",
"url":28,
"doc":"Children of this class are used to control the money flow in and out of the account during the backtest. Each method are called at the beginning of the time period (day, week, month, year) and the user can decide to deposit or withdraw money from the account. For example, If I want to deposit 1000$ every month, I would do it in the every_month method and 1000$ would be deposited at the beginning of every month. To access the account, just use the self.account attribute. However, you must not modify the account in any way. To add or remove money from the account, make your overriden method return the amount of money added(Positive) or removed(Negative) from the account. For example, if you want to deposit 1000$ every month, you would do: override the every_month method and return 1000. If you want to withdraw 1000$ every month, you would do the same thing but return -1000 instead. If you want to do your deposit/withdrawal based on information from your portfolio or your broker, use the attributes: self.broker.portfolio or self.broker. You also need to return a comment on the transaction that can be None. Check the example below for more information.  Again, if you use the broker, the account or the strategy, Make sure that they aren't modified in any way! DO NOT override the 'init' method. Instead, override the __init__ method if you need to initialize some variables. Attributes: broker: The broker object account: The account object strategy: The strategy object transactions: A list of all transactions made by the cash controller total_deposited: The total amount of money deposited in the account by the cash controller Example: >>> from backtest.engine import CashControllerBase >>>  Deposit 1000$ in the account if the available cash is below 1000$ (Check every month) >>> class MyCashController(CashControllerBase):  . def every_month(self, timestamp: datetime) -> Tuple[float, Optional[str :  . if self.account.available_cash < 1000:  . return 1000, \"Fund deposit\"  ."
},
{
"ref":"backtest.engine.cashController.CashControllerBase.init",
"url":28,
"doc":" Args:   -=  account : The account  broker : The broker [Shoudl not be modified ] ",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_day",
"url":28,
"doc":"This method is called every day during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_week",
"url":28,
"doc":"This method is called every week during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_month",
"url":28,
"doc":"This method is called every month during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_year",
"url":28,
"doc":"This method is called every year during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController",
"url":28,
"doc":"This class is a simple cash controller that will deposit ow withdraw a fixed amount of money at the beginning of every period. If a period's amount is 0 (Default), it won't deposit or withdraw funds."
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_day",
"url":28,
"doc":"This method is called every day during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_week",
"url":28,
"doc":"This method is called every week during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_month",
"url":28,
"doc":"This method is called every month during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_year",
"url":28,
"doc":"This method is called every year during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.init",
"url":28,
"doc":" Args:   -=  account : The account  broker : The broker [Shoudl not be modified ] ",
"func":1
},
{
"ref":"backtest.engine.tsData",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency",
"url":29,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.tsData.DividendFrequency.from_delta",
"url":29,
"doc":"",
"func":1
},
{
"ref":"backtest.engine.tsData.DividendFrequency.nearest",
"url":29,
"doc":"Get the nearest value in available_values. (Kinda like a custom round( Args:   -=  value : The value to approximate  available_values : The available values to approximate to Returns:     - : The approximation (nearest value)",
"func":1
},
{
"ref":"backtest.engine.tsData.DividendFrequency.NO_DIVIDENDS",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.MONTHLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.QUARTERLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.BIANNUALLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.YEARLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.functional",
"url":30,
"doc":"This module contains multiple helper function to execute a backtest."
},
{
"ref":"backtest.engine.functional.crossover",
"url":30,
"doc":"Check if series1 crosses over series2 Args:   -=  series1 : Any pandas series with any index  series2 : Any pandas series with any index Returns:     - : True if series1 crosses over series2, False otherwise",
"func":1
},
{
"ref":"backtest.engine.functional.crossunder",
"url":30,
"doc":"Check if series1 crosses under series2 Args:   -=  series1 : Any pandas series with any index  series2 : Any pandas series with any index Returns:     - : True if series1 crosses under series2, False otherwise",
"func":1
},
{
"ref":"backtest.engine.functional.descending",
"url":30,
"doc":"Check if series is  continuously descending.  Example: >>> series = pd.Series([10, 7, 8, 7, 5]) >>> descending(series, lookback=3)  True >>> descending(series, lookback=5)  False Args:   -=  series : Any pandas series with any index  lookback : Number of previous values to consider. It is also the number of values that needs to becontinuously descending. Returns:     - : True if series is continuously descending, False otherwise",
"func":1
},
{
"ref":"backtest.engine.functional.ascending",
"url":30,
"doc":"Check if series is  continuously ascending.  Example: >>> series = pd.Series([1, 4, 3, 6, 7]) >>> ascending(series, lookback=3)  True >>> ascending(series, lookback=5)  False Args:   -=  series : Any pandas series with any index  lookback : Number of previous values to consider. It is also the number of values that needs to becontinuously descending. Returns:     - : True if series is continuously ascending, False otherwise",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.FetchContext",
"url":31,
"doc":"This Pipe will return as a pipe output what has been passed as the context.",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders.TimeResExtender",
"url":31,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"backtest.engine.time_resolution_extenders.TimeResExtender.extend",
"url":31,
"doc":"Extend the data with new time resolutions. By default, it uses the single_extend method to extend each timeseries data independently. However, it is possible to override this method and bypass the single_extend method to extend the data in a more complex way or to optimize the process. Args:   -=  data : The current data statically acquired. (Fetch from sources)  main_timestep : The index of the timeseries data in data list to use as the main series. Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders.TimeResExtender.single_extend",
"url":31,
"doc":"Extend a single timeseries data with new time resolutions. Override this method Args:   -=  data : The current data statically acquired. (Fetch from sources) Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod",
"url":31,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.THIRTY_MINUTES",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_HOUR",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.FOUR_HOURS",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_DAY",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_WEEK",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_MONTH",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.BasicExtender",
"url":31,
"doc":"This class provide an easy top implement extender for basic time resolutions such as 30 minutes, 1 hour, 4 hours, 1 day, 1 week, and 1 month. It assumes to have has main timestep (In the backtest object) a time resolution smaller than the value chose. For example, if the main timestep is 1 day, it will not work to extend the data to 30 minutes or 4h. If you have multiple static timestep that you want to extend, you can override the extend method to handle this case, or directly derive a new class from TimeResExtender. Example: >>> extender = BasicExtender(TimePeriod.ONE_DAY) + BasicExtender(\"1w\") >>>  Given that the main timeresolution of the static data is smaller than one day. Ex: 30 minutes >>>  The data will have a time resolution of 30 minutes, 1 day and 1 week. >>> data: List[Dict[str, TSData =  . >>> data += extender.extend(data)"
},
{
"ref":"backtest.engine.time_resolution_extenders.BasicExtender.single_extend",
"url":31,
"doc":"Extend a single timeseries data with new time resolutions. Override this method Args:   -=  data : The current data statically acquired. (Fetch from sources) Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders.BasicExtender.extend",
"url":31,
"doc":"Extend the data with new time resolutions. By default, it uses the single_extend method to extend each timeseries data independently. However, it is possible to override this method and bypass the single_extend method to extend the data in a more complex way or to optimize the process. Args:   -=  data : The current data statically acquired. (Fetch from sources)  main_timestep : The index of the timeseries data in data list to use as the main series. Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.backtestResult",
"url":32,
"doc":""
},
{
"ref":"backtest.engine.backtestResult.Period",
"url":32,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.backtestResult.Period.YEARLY",
"url":32,
"doc":""
},
{
"ref":"backtest.engine.backtestResult.Period.QUARTERLY",
"url":32,
"doc":""
},
{
"ref":"backtest.engine.backtestResult.Period.MONTHLY",
"url":32,
"doc":""
},
{
"ref":"backtest.engine.backtestResult.Period.WEEKLY",
"url":32,
"doc":""
},
{
"ref":"backtest.engine.backtestResult.Period.DAILY",
"url":32,
"doc":""
},
{
"ref":"backtest.engine.backtestResult.Period.HOURLY",
"url":32,
"doc":""
},
{
"ref":"backtest.engine.backtestResult.BackTestResult",
"url":32,
"doc":"This class is used to store the result of a backtest. It contains all the information about the backtest Args:   -=  strategy_name : The name of the strategy  metadata : The metadata object  start : Start date of the backtest data  end : End date of the backtest data  intial_cash : The initial cash of the account  added_cash : The cash added to the account (or removed) with the CashController  market_index : The market index time series (Price/score evolution across time)  broker : The broker object used to backtest the strategy  account : The account object used to backtest the strategy  risk_free_rate : The risk free rate used to compute the ratios [%]. (Usually the estimated policy rate) "
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.get_ohlc",
"url":32,
"doc":"Return a OHLC dataframe of the equity history corresponding to the period. Args:   -=  period : The period to use to make the OHLC dataframe Returns:     - : The OHLC dataframe",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.compute_sharp_ratio",
"url":32,
"doc":"Compute the sharp ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sharp ratio of the strategy",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.compute_sortino_ratio",
"url":32,
"doc":"Compute the sortino ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sortino ratio of the strategy",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.compute_calmar_ratio",
"url":32,
"doc":"Compute the calmar ratio of the strategy Args:   -=  yearly_max_drawdown : The yearly maximum drawdown of the strategy Returns:     - : The calmar ratio of the strategy",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.get_drawdown",
"url":32,
"doc":"Get the maximum drawdown of the strategy for each timestep (Causally - so looking back in time) Args:   -=  equity_history : The equity history of the strategy (Worth of the portoflio evolution over time)  equity_timestamps : The timestamps of the equity history  window : The lookback window to use to compute the drawdown Returns:     - : A time series of the maximum drawdown of the strategy for each time steps",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.strided_arr",
"url":32,
"doc":"Create a strided array to compute the rolling window of an array Args:   -=  a : The array  window : The window size Returns:     - : The strided array. Shape(len(a) - window + 1, window)",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.load_state",
"url":32,
"doc":"Load a backtest result from a state dictionary Args:   -=  data : The state dictionary Returns:     - : The backtest result",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.save",
"url":32,
"doc":"Save the backtest result to a JSON file with the .bktst extension if none is provided. About the .bktst extension: This is the fileformat for a backtest result. It is a JSON file that contains all the information about the backtest. It is a human readable file that can be used to share backtest results with other people. Also, it can be loaded by this module so that the backtest result can be analyzed later. Args:   -=  path : The path to save the backtest result. If no extension is provided, the .bktst extension will be added. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.load",
"url":32,
"doc":"Load a backtest result from a JSON file Args:   -=  path : The path to the backtest result file Returns:     - : The backtest result",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.toAnalyser",
"url":32,
"doc":"Convert the backtest result to an analyser object to visualize the backtest results Returns:     - : The analyser object",
"func":1
},
{
"ref":"backtest.engine.utils",
"url":33,
"doc":""
},
{
"ref":"backtest.engine.utils.get_py_version",
"url":33,
"doc":"This method return the python version as a string. Returns:     - : Python version as a string",
"func":1
},
{
"ref":"backtest.engine.utils.get_platform",
"url":33,
"doc":"This method return the platform information. Returns:     - : platform info as a dictionary",
"func":1
},
{
"ref":"backtest.engine.utils.get_hardware",
"url":33,
"doc":"This method return the hardware information. Returns:     - : hardware info as a dictionary",
"func":1
},
{
"ref":"backtest.engine.record",
"url":34,
"doc":""
},
{
"ref":"backtest.engine.record.Record",
"url":34,
"doc":"This class contains information about a stock and is pass to the strategy. Args:   -=  chart : The prepared chart of the stock  ticker : The ticker of the stock  time_res : The idx in the list of resolution of the backtest object of the time resolution of the record.  marginable : Whether the stock is marginable  shortable : Whether the stock is shortable  div_freq : The dividend frequency of the stock  short_rate : The short rate of the stock  next_tick : The next tick of the stock "
},
{
"ref":"backtest.engine.record.Record.next_tick",
"url":34,
"doc":"This method is used to get the next tick of the stock. Returns:     - : The next tick of the stock"
},
{
"ref":"backtest.engine.record.Records",
"url":34,
"doc":"Class containing multiple records for a given time resolution. You can access the record like a list with the index of the record being the index of the ticker in the list of tickers. You can also access the record by the string of the ticker like a dictionary. You can iterate over the records like a dictionary (ticker, record). Finally, you can check if a ticker is in the records like a dictionary. Attributes: records: The records. The keys are the tickers of the securities. tickers: The tickers of the securities in the same order as the records attribute. features: The features of the records. It is the columns of the charts. time_res: The time resolution time_res_idx: The index of the time resolution in the available_time_res attribute of the backtest object window: The window size (lookback period) of the records. Used when exporting to numpy. Implements: __getitem__, __setitem__, __iter__, __contains__ Args:   -=  records : The records. If a list, it will be converted to a dictionary internally. If a dictionary, the keys will be the tickers of the securities.  time_res : The time resolution  time_res_idx : The index of the time resolution in the available_time_res attribute of the backtest object  window : The window size (lookback period) of the records. Used when exporting to numpy. "
},
{
"ref":"backtest.engine.record.Records.numpy",
"url":34,
"doc":"This method will return the charts as a numpy array. The array might contain nan values if the chart is not long enough to fill the window. Returns:     - : A numpy array of the shape (n, w, p) where n is the number of securities, w is the window size and p is the number of features.",
"func":1
},
{
"ref":"backtest.engine.record.Records.to_list",
"url":34,
"doc":"Convert the Records object to a list of Record Returns:     - : A list of Record",
"func":1
},
{
"ref":"backtest.engine.record.Records.update_features",
"url":34,
"doc":"This method will update the features attribute to the new features set based on the columns of the charts. Assuming all the charts have the same features. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.record.RecordsBucket",
"url":34,
"doc":"Class containing multiple Records objects for all time resolutions. You can access each Records object by their corresponding time resolution or their index in the available_time_res attribute of the backtest object. You can also iterate over the Records objects like a dictionary (time resolution, Records object). To simplify the access of the Records object associated with the main time resolution, you can use the main attribute. Attributes: records: The Records objects. The keys are the time resolutions. available_time_res: The available time resolutions main_timestep: The index of the main time resolution in the available_time_res attribute of the backtest object Args:   -=  records : The records  available_time_res : The available time resolutions "
},
{
"ref":"backtest.engine.record.RecordsBucket.main",
"url":34,
"doc":"Get the main timestep set of records Returns:     - : The main timestep set of records"
},
{
"ref":"backtest.engine.broker",
"url":35,
"doc":""
},
{
"ref":"backtest.engine.broker.MarginCall",
"url":35,
"doc":"Data class to store info about margin calls Args:   -=  time_remaining : Time remaining in number of steps until liquidation  amount : Amount in $ that needs to be added to account to come out of margin call "
},
{
"ref":"backtest.engine.broker.MarginCall.export",
"url":35,
"doc":"This method export the margin call object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.MarginCall.load",
"url":35,
"doc":"This method load a margin call object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.BrokerState",
"url":35,
"doc":"Data class to store message from broker to strategy"
},
{
"ref":"backtest.engine.broker.BrokerState.export",
"url":35,
"doc":"This method export the broker state object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.BrokerState.load",
"url":35,
"doc":"This method load a broker state object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.StepState",
"url":35,
"doc":"Record the state of the broker at each steps for easier strategy debugging Args:   -=  timestamp : The date and time of the current step  worth : The worth of the portfolio  pending_orders : The pending orders that were not executed  filled_orders : The orders that were executed at the current step  margin_calls : The margin calls active at the current step "
},
{
"ref":"backtest.engine.broker.StepState.export",
"url":35,
"doc":"This method export the step state object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.StepState.load",
"url":35,
"doc":"This method load a step state object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.Broker",
"url":35,
"doc":"When using margin, you need to add a column in the data called 'marginable' that is bool corresponding if a stock can have margin or not. Note: If there is not enough cash in the account when monthly fees are deduced, the strategy fills a bankruptcy, and the simulation stops. Args:   -=  bank_account : The bank account holding cash and collateral with the initial cash set.  commission : The commission to be paid for each trade. This parameter cannot be set if relative_commission is set. And vice versa. If commission and relative_commission are both None, the commission is set to 0.  relative_commission : The commission to be paid for each trade as a ratio (0-1) of the trade value. This parameter cannot be set if commission is set. And vice versa.  margin_interest : The margin interest rate. It is the interest rate charged on borrowed money. It is calculated daily and charged monthly.  min_initial_margin : The initial margin required to buy a stock on margin. It is a ratio (0-1) of the stock's value. Example: 50% initial margin is 0.5  min_maintenance_margin : The minimum margin required to keep a stock on margin before a margin call. It is a ratio (0-1) of the stock's value. Example: 25% maintenance margin is 0.25  liquidation_delay : The time a margin call has to be active before the broker liquidate positions to pay the margin call. (Must be grater than 0, and an int)  min_initial_margin_short : The minimum initial margin required to sell a stock short. It is a ratio (0-1)  min_maintenance_margin_short : The minimum maintenance margin required to keep a stock short before a margin call. It is a ratio (0-1) of the stock's value. Raises:   -=  ValueError : If both commission and relative_commission are set.  ValueError : If relative_commission is not None and not between 0 and 1  ValueError : If commission is not None and smaller than 0  ValueError : If margin_interest is not between 0 and 1  ValueError : min_initial_margin and min_maintenance_margin are not between 0 and 1  ValueError : If min_maintenance_margin_short and min_initial_margin_short are not between 0 and 1  ValueError : If min_maintenance_margin is greater than or equal to min_initial_margin  ValueError : If min_maintenance_margin_short is greater than or equal to min_initial_margin_short "
},
{
"ref":"backtest.engine.broker.Broker.buy_long",
"url":35,
"doc":"The strategy calls this method to open a long position. The position can be bought on margin. Args:   -=  ticker : The ticker of the security to buy  amount : The amount of shares to buy  amount_borrowed : The amount of shares to buy on margin. (Won't be charged in the account)  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the maximum price to buy.Meaning the order will be executed if the price is lower or equal to the limit. The second value is the minimumprice to buy. Meaning the order will be executed if the price is higher or equal to the limit. If the limit is(None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.sell_long",
"url":35,
"doc":"The strategy calls this method to close a long position. Args:   -=  ticker : The ticker of the security to sell  amount : The amount of shares to sell  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the minimum price to sell(Stop loss). Meaning the order will be executed if the price is lower or equal to the limit. The second valueis the maximum price to sell. Meaning the order will be executed if the price is higher or equal to the limit.If the limit is (None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.sell_short",
"url":35,
"doc":"The strategy calls this method to open a short position. Args:   -=  ticker : The ticker of the security to sell  amount_borrowed : The amount of shares to sell short.  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the minimum price to sell.Meaning the order will be executed if the price is lower or equal to the limit. The second value is the maximum price to sell. Meaning the order will be executed if the price is higher or equal to the limit.If the limit is (None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.buy_short",
"url":35,
"doc":"The strategy calls this method to close a short position. Args:   -=  ticker : The ticker of the security to buy  amount_borrowed : The amount of shares to buy back.  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the maximum price to buy.Meaning the order will be executed if the price is lower or equal to the limit. The second value is the minimumprice to buy. Meaning the order will be executed if the price is higher or equal to the limit. If the limit is(None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.tick",
"url":35,
"doc":"The simulation calls this method after the strategy has run. It will calculate interests and margin call if applicable. It will do trades that can be done in the trade queue at the next open. Args:   -=  timestamp : The date and time of the current step  next_timestamp : The date and time of the next step where orders will be evaluated/bought  security_names : A list of all securities where the index of each ticker is the index of the data of the corresponding security in the 'next_tick_data' parameter along the first axis (axis=0).  current_tick_data : An array of prices of each security for the current step(n_securities, 4) The 4 columns of the array are: Open, High, Low, Close of the next step.  next_tick_data : An array containing prices of each security for the next step shape(n_securities, 4) The 5 columns of the array are: Open, High, Low, Close and Stock Splits of the next step.  marginables : A boolean array of shape (n_securities, 2) [Marginable, Shortable) where True means that the security can be bought on margin / sold short and False means that it cannot be bought on margin / sold short.  dividends : A float array of shape (n_securities, ) containing the dividends of each security for the current step.  div_freq : The frequency that the security is paying dividends.  short_rates : The interest rates for each security that the user held overnight. Shape(n_securities, )  last_tick : Whether it is the last tick of the simulation. If it is, the broker will liquidate all positions and charge interests. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.pending_orders",
"url":35,
"doc":"Return a copy of the pending orders"
},
{
"ref":"backtest.engine.broker.Broker.compute_dividend_payout",
"url":35,
"doc":"Compute the dividend payout of a long position Args:   -=  position : The position to calculate dividend payout  div_freq : The frequency that the security is paying dividends.  dividends : The actual dividends payout for 1 share and for the period in div_freq. Returns:     - : Dividend payout Raises:   -=  RuntimeError : If the position is not long ",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.get_worth",
"url":35,
"doc":"Get the worth of the portfolio. (Doesn't include the transaction cost as if we would sell the positions) Formula: worth = cash + sum(long_positions) - sum(short_positions) where: long_positions = sum(long_position_amount  close_price - debt) short_positions = sum(short_position_amount  close_price) cash: The total cash in portfolio excluding all collateral. Args:   -=  security_names : A list of all securities where the index of each ticker is the index of the data of the corresponding security in the 'current_tick_data' parameter along the first axis (axis=0).  current_tick_data : An array containing prices of each security for the current step shape(n_securities, 4) Returns:     - : worth in dollars",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.new_margin_call",
"url":35,
"doc":"Create a new margin call and appends it to the other margin calls. Do not forget to remove money from account if necessary. It also add the value to the debt record. Args:   -=  value : The value that needs to be added to the account to cover margin call Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.remove_margin_call",
"url":35,
"doc":"Remove a margin call from the list of margin calls. It also removed the debt in the debt record. Args:   -=  key : The key of the margin call to remove Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.make_trade",
"url":35,
"doc":"This method is call to make trades (convert tradeOrders to trade). Make the trade if price is within limits Args:   -=  order : TradeOrder  security_price : The security price (Open, High, Low, Close, Splits)  timestamp : The time where securities will be bought (Usually the next step)  marginable : If the security is marginable.  shortable : If the security is shortable. Returns:     - : True if the trade was successful (Needs to remove from pending trades) And False otherwise Raises:   -=  RuntimeError : If the trade cannot be executed because of margin or cash issues. ",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.get_state",
"url":35,
"doc":"Get the current state of the broker as a JSONable dictionary (deepcopy Note: - It doesn't include the account's state. Returns:     - : The broker's state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.load_state",
"url":35,
"doc":"Load a broker from a state dictionary Args:   -=  data : The state dictionary  account : The account to which the broker is linked (Loaded by the BacktestResult object) Returns:     - : The broker",
"func":1
},
{
"ref":"backtest.engine.backtest",
"url":15,
"doc":""
},
{
"ref":"backtest.engine.backtest.Backtest",
"url":15,
"doc":" Args:   -=  data : The data on which to run the backtest. It is a list of dictionaries where each dictionary represents a group of time series data. The key is the ticker and the value is the TSData object. IMPORTANT: The length of each time series (charts) must be the same with the same index. If they are not, you need to pad the data with nan.  strategy : The strategy to test  metadata : A metadata object. This is useful to store information about the backtest to add context.  market_index : The TSData object containing the reference market index. (Used to compare the strategy performances to the market)  main_timestep : The index of the timeseries data in data list to use as the main series. i.e. the frequency at which the strategy is run. The other timeseries will be passed to the strategy as additional data. For example, if our data is a list of two dictionaries, the first one containing hourly data and the second one containing daily data, and we extend the daily data to weekly data, we would set main_timestep to 1. (The second dictionary) to run our strategy at each open market days.  initial_cash : The initial cash in bank account  commission : The absolute commission. In $ per trade  relative_commission : The relative commission. In % of the trade value. Example: 5% would be 5  margin_interest : The interest rate on margin. In % of the margin value. Example: 5% would be 5  min_initial_margin : The minimum initial margin. In % of the trade value. Example: 5% would be 5  min_maintenance_margin : The minimum maintenance margin. In % of the trade value. Example: 5% would be 5  liquidation_delay : The delay before liquidating a position in margin call. In timestep. Example, if the delay is 2 and the main time resolution is daily, the position will be liquidated 2 days  min_initial_margin_short : The minimum initial margin for short positions. In % of the trade value.  min_maintenance_margin_short : The minimum maintenance margin for short positions. In % of the trade value.  broker : The Broker class to use. This is useful to use a custom broker. The broker class must inherit from the Broker class.  account : The Account class to use. This is useful to use a custom account. The account class must inherit from the Account class.  window : The lookback period for the strategy. The number of datapoint to pass to the strategy at each timestep. (The number of datapoint in the main timestep. There might be more or less for others)  default_marginable : In case there is no column \"Marginable\" in the data, this value will be used to know if the security is marginable.  default_shortable : In case there is no column \"Shortable\" in the data, this value will be used to know if the security is shortable.  risk_free_rate : The risk-free rate in %. Used to calculate performance ratios like the Sharpe ratio.  default_short_rate : The short rate in % in case there is no column 'Short_rate' in the data.  sell_at_the_end : Whether to sell every open position at the end or not. If True, the strategy will sell the positions at the end of the backtest.  cash_controller : A cash controller object to control the money flow in and out of the bank account during the backtest. This is useful to simulate the effect of, for example, weekly deposit or monthly withdrawal.  verbose : 0: No print, 1: Only errors, 2: Errors and warnings, 3: All  time_res_extender : A time resolution extender object. This is useful to add time resolutions to the data  indicators : An Indicator set object. This is useful to add indicators to the data. The indicators are calculated at each timestep and passed to the strategy. It can also be a list with the same length as the number of time resolution. Each element of the list will be an IndicatorSet object to use for the corresponding time resolution. If it is a dictionary, the keys will be the index of the time resolution and the values will be the IndicatorSet object to use for the corresponding time resolution. If a dictionary is used, make sure there is at least a key for the main time resolution. If the streaming parameter is True for one of the IndicatorSet, the streaming will be activated for every supported indicators. "
},
{
"ref":"backtest.engine.backtest.Backtest.apply_indicators",
"url":15,
"doc":"Apply the indicators to the data (All tickers in time res) Args:   -=  data : The list of records to apply the indicators to  time_res_idx : The current time resolution  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The updated data",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.run_indicator",
"url":15,
"doc":"Run the indicators on a single chart. Args:   -=  data : The chart data OHLCV  previous_data : The previously cached data. Used when streaming is True. If streaming is False, this parameter is ignored. This should be a dataframe with the same index as the data. This means that the indicators points that needs to be calculated should be nan, and one already calculated should be the previously calculated values. The columns names should be the output columns names of the indicators.  indicators : The indicatorSet to use.  streaming : Whether to use the streaming capabilities of the indicators or not.  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The new data",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.run",
"url":15,
"doc":"Run the backtest simulation with the given data and strategy. It will show a progress bar showing the current progress. It will save the results and all the statistics into a BackTestResult object in the results attribute, or returned value of this method. Returns:     - : BackTestResult object containing all the results, statistics, debug info, etc.",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.stadardize_timesteps",
"url":15,
"doc":"Optionnaly reformat timesteps_list. Can be useful when indexes are variable across stocks Args:   -=  timesteps_list : The list of timesteps Returns:     - : The reformatted list of timesteps",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: (Read the warning below if your data contains higher resolution than main res) For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. IMPORTANT: If you need this method in your setup, you should override it since it may not work for your setup. In fact, it is hard to forge new candles for any arbitrary time resolution from discrete timeseries where timesteps might not correctly align. You should take this into account when making this method. TO OVERRIDE THIS METHOD: Just override it like any other method. You can also use the default method by calling 'self.default_forge_last_candle' and complement it. To suppress the warning, you can override this method by only calling the default 'self.default_forge_last_candle' Args:   -=  data : The data  prepared_data : The already prepared data.  current_time_res : The current time resolution  timestep : The current timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.default_forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. DO NOT OVERRIDE THIS METHOD: If you need to override a candle forging method, override the method 'forge_last_candle' instead. Args:   -=  data : The data  current_time_res : The current time resolution (to forge)  timestep : The current timestep  main_timestep : The main timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.engine.portfolio",
"url":36,
"doc":""
},
{
"ref":"backtest.engine.portfolio.Position",
"url":36,
"doc":"Data class holding info about a position"
},
{
"ref":"backtest.engine.portfolio.Position.update_time_stock_idx",
"url":36,
"doc":"Call this method to update the time_stock_idx. It will be used to calculate the dividends due to the shareholders. Call this method at the end of each day. Args:   -=  timestep_elapsed : The number of seconds elapsed since the last call to this method Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.dividends_got_paid",
"url":36,
"doc":"Call this method to reset last dividends date. Useful when calculating how much dividends the user should have Args:   -=  timestamp : The timestamp of dividend payment Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.split",
"url":36,
"doc":"Call this method when a stock split occurs. It will update the average price and the amount. - $new_price = old_price / ratio$ - $new_amount = old_amount  ratio$ Args:   -=  ratio : The ratio of the split. let's say it is 7:1, then the ratio is 7, 2:3, then the ratio is 2/3 Returns:     - : The two new positions",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.export",
"url":36,
"doc":"Export the position to a dictionary JSONable Returns:     - : The object as a dictionary",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.load",
"url":36,
"doc":"Load the object from a dictionary Args:   -=  data : The dictionary to load from Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.portfolio.TradeStats",
"url":36,
"doc":"This class will hold the stats for a given trade. It will be used to calculate the stats for the whole portfolio Args:   -=  trade : The trade object (SellLong or BuyShort)  duration : The duration of the trade  profit : The profit made on the trade  rel_profit : The profit made on the trade relative to the amount invested NOT IN PERCENTAGE  ratio_owned : The ratio of the security held in account that are owned by the investor. (not bought on margin) Raises:   -=  ValueError : If the trade type is not SellLong or BuyShort (Doesn't exit a position) "
},
{
"ref":"backtest.engine.portfolio.TradeStats.export",
"url":36,
"doc":"Export the object to a JSONable dictionary Note: The duration is saved in seconds Returns:     - : A dictionary corresponding top the object's state",
"func":1
},
{
"ref":"backtest.engine.portfolio.TradeStats.load",
"url":36,
"doc":"Load the object from a dictionary Args:   -=  data : The dictionary to load from Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio",
"url":36,
"doc":"This class will have two sub portfolios: long and short. When 'trade' is called, it will add or remove in the appropriate portfolio the security. It will also remember each trades (in a list) to recover the state at each days (For debugging purpose). Args:   -=  transaction_cost : The cost of a transaction (buy or sell) in $ or in %  transaction_relative : Whether the transaction cost is in percentage relative to transaction cost or fix price  debt_record : The amount of debt used to buy securities: {security: amount}. Passed by reference from broker. "
},
{
"ref":"backtest.engine.portfolio.Portfolio.trade",
"url":36,
"doc":"Make a trade and add it to the portfolio. Note: This class will handle the debt record. It will add the amount borrowed to the debt record when buying long and remove it when selling long. Args:   -=  trade : Can be BuyLong, SellLong, SellShort, BuyShort  correction : The correction to apply to the price of the trade. It is used to correct the price onlywhile logging the transaction. It could be used when a split happens at the next tick. If the correction is 0,it is ignored. Returns:     - : The cash change in account. If negative, withdraw. If positive, deposit. Raises:   -=  RuntimeError : If the transaction ID is already used ",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.split",
"url":36,
"doc":"Call this method when a stock split occurs. It will update the average price and the amount of the position. Args:   -=  ticker : The ticker of the security  ratio : The ratio of the split. let's say it is 7:1, then the ratio is 7, 2:3, then the ratio is 2/3 Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getShortProfit",
"url":36,
"doc":"Calculate the profit made on a short trade Args:   -=  average_sell_price : The price at which the security was sold  average_buy_price : The price at which the security was bought  qty : The number of shares in the trade Returns:     - : The profit (positive) or loss (negative) made on the trade, relative profit",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getLongProfit",
"url":36,
"doc":"Calculate the profit made on a long trade Args:   -=  average_buy_price : The price at which the security was bought  average_sell_price : The price at which the security was sold  qty : The number of shares in the trade  ratio_owned : The ratio of the security held in account that are owned by the investor. (not bought on margin)  debt : The amount of debt used to buy the security  number_of_entry : The number of time the position was entered. (Used only if transaction cost is absolute) Returns:     - : The profit (positive) or loss (negative) made on the trade, relative profit in percentage",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.estimateCost",
"url":36,
"doc":"This method can e used by external classes such as Borker to estimate the cost of a trade. Args:   -=  price : The price of the security  amount : The amount of security in the transaction (Trade)  sell : Whether the trade is a sell or not. If sell, we subtract the transaction cost from the worth. Returns:     - : Worth of transaction - transaction cost",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getShort",
"url":36,
"doc":"To get what securities are sold short to later calculate interests Returns:     - : Dictionary[security, amount]",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getLong",
"url":36,
"doc":"To get what securities are bought long to later calculate interests (When using margin) Returns:     - : Dictionary[security, amount]",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_trades",
"url":36,
"doc":"To get the list of trades. (Make a deep copy) Returns:     - : the list of rades",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_trade_count",
"url":36,
"doc":"To get the number of trades made. Args:   -=  exit_only : If True, Only the trade that exit a position are counted Returns:     - : The number of trades",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.update_time_stock_idx",
"url":36,
"doc":"Call this method to update the time_stock_idx for each position. It will be used to calculate the dividends due to the shareholders. Args:   -=  timestep_elapsed : The number of timestep elapsed since the last call to this method Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_trade_stats",
"url":36,
"doc":"To get the stats for each trade. (Make a deep copy) Returns:     - : The dictionary of trades: { \"best_trade\": float,  In percentage \"worst_trade\": float,  In percentage \"win_rate\": float,  In percentage \"avg_trade\": float,  In percentage \"max_trade_duration\": float,  In days \"min_trade_duration\": float,  In days \"avg_trade_duration\": float,  In days \"profit_factor\": float,  Total gains / Total losses \"SQN\": float,  System Quality Number}",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_state",
"url":36,
"doc":"Return the state of the portfolio. (Make a deep copy) Returns:     - : The state of the portfolio as a dict",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.load_state",
"url":36,
"doc":"Load the state of the portfolio from a dictionary Args:   -=  data : The dictionary to load from  debt_record : The amount of debt used to buy securities: {security: amount}. Passed by reference from broker. Returns:     - : The portfolio object",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.empty",
"url":36,
"doc":"To check if the portfolio is empty Returns:     - : True if the portfolio is empty, False otherwise",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.long",
"url":36,
"doc":"Return the long positions that are not empty (amount > 0)"
},
{
"ref":"backtest.engine.portfolio.Portfolio.short",
"url":36,
"doc":"Return the short positions that are not empty (amount > 0)"
},
{
"ref":"backtest.engine.analyser",
"url":37,
"doc":""
},
{
"ref":"backtest.engine.analyser.Analyser",
"url":37,
"doc":"This class is used to analyse the backtest results. It has few utility methods that helps the user to visualize the backtest results."
},
{
"ref":"backtest.engine.analyser.Analyser.get_trade_history",
"url":37,
"doc":"This method returns the trade history of the backtest. Returns:     - : The trade history",
"func":1
},
{
"ref":"backtest.engine.analyser.Analyser.get_margin_calls",
"url":37,
"doc":"This method returns the margin calls of the backtest. Returns:     - : The margin calls",
"func":1
},
{
"ref":"backtest.engine.analyser.Analyser.get_transactions",
"url":37,
"doc":"This method returns the transactions of the backtest. Returns:     - : The transactions",
"func":1
},
{
"ref":"backtest.engine.analyser.Analyser.inspect",
"url":37,
"doc":"This method returns a TradeInspector object that can be used to visualize the trade order on the chart. Args:   -=  ticker : The ticker to inspect  timestamp : The timestep to inspect Returns:     - : The TradeInspector object",
"func":1
},
{
"ref":"backtest.engine.analyser.Analyser.focus",
"url":37,
"doc":"This method will return a class that focus on a given ticker. It will have methods to visualize the trades and the indicators for the given ticker. Args:   -=  ticker : The ticker to lookout Returns:     - : TickerFocus",
"func":1
},
{
"ref":"backtest.engine.analyser.TickerFocus",
"url":37,
"doc":""
},
{
"ref":"backtest.engine.analyser.TickerFocus.format_float",
"url":37,
"doc":"Make sure that the float value is converted as a string and is aligned to the right and with the good len. Returns:     - : The float as a formattted string",
"func":1
},
{
"ref":"backtest.engine.analyser.TradeInspector",
"url":37,
"doc":""
},
{
"ref":"backtest.engine.analyser.TradeInspector.plot",
"url":37,
"doc":"This method plots the trade order on the chart with the price history (Only in the window) This helps visualize what the strategy saw to make that decision. LEGEND: Green: Enter a Position Red: Exit a Position ^: Buy v: Sell Args:   -=  indicator_cb : The indicator callback to plot on the chart. Returns a list of 'make_addplot' objects Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.analyser.TradeInspector.get_indicators",
"url":37,
"doc":"This method returns the indicators for the trade order. It is meant to be override by the user. Returns:     - : indicators as 'make_addplot' objects.",
"func":1
},
{
"ref":"backtest.engine.account",
"url":38,
"doc":""
},
{
"ref":"backtest.engine.account.CollateralUpdateType",
"url":38,
"doc":"[Enum] The type of collateral update. Can be: - ADD - REMOVE - UPDATE"
},
{
"ref":"backtest.engine.account.CollateralUpdateType.ADD",
"url":38,
"doc":""
},
{
"ref":"backtest.engine.account.CollateralUpdateType.REMOVE",
"url":38,
"doc":""
},
{
"ref":"backtest.engine.account.CollateralUpdateType.UPDATE",
"url":38,
"doc":""
},
{
"ref":"backtest.engine.account.CollateralUpdate",
"url":38,
"doc":"Data class holding info about a collateral update Args:   -=  amount : The amount frozen in the account as collateral (Cannot be used to buy securities)  dt : The datetime of the update.  message : A message explaining the reason of the update. (Useful for debugging the strategy)  collateral_update_type : The type of update. Can be ADD, REMOVE or UPDATE "
},
{
"ref":"backtest.engine.account.CollateralUpdate.export",
"url":38,
"doc":"This method export the trade order object to a JSONable dictionary. Returns:     - : The object's state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.account.CollateralUpdate.load",
"url":38,
"doc":"This method load a CollateralUpdate object from a dictionary. Args:   -=  data : The dictionary to load from Returns:     - : The CollateralUpdate object",
"func":1
},
{
"ref":"backtest.engine.account.Account",
"url":38,
"doc":"Object representing the bank account of the strategy. This object keeps track of the cash available in the account, the collateral used in the account and the transactions made by the strategy. Attributes: available_cash: The amount of cash available in the account. This is the amount of cash that can be used to buy securities. collateral: The amount of money that is currently being used as collateral. transactions: The transactions made by the strategy."
},
{
"ref":"backtest.engine.account.Account.update_collateral",
"url":38,
"doc":"Updates the amount of collateral in the account. This is the amount of money held as collateral and cannot be used. This should be updated at each steps because it should be dependent to the current value of the assets. Raise a RuntimeError if the amount of collateral is bigger than the current worth of the account. Args:   -=  amount : Value of collateral.  dt : datetime of the update  message : Reason of the update. Can be, for example: \"Step update\", \"Enter short position for {ticker}\", etc. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.account.Account.add_collateral",
"url":38,
"doc":"Adds collateral to the account. This is the amount of money held as collateral and cannot be used. This method could be used when selling short a position. Args:   -=  amount : Value of collateral.  dt : datetime of the update  message : Reason of the update. Can be, for example: \"Step update\", \"Enter short position for {ticker}\", etc. Returns:     - : None Raises:   -=  RuntimeError : If the amount of collateral is bigger than the current cash in the account. ",
"func":1
},
{
"ref":"backtest.engine.account.Account.remove_collateral",
"url":38,
"doc":"Removes collateral from the account. This is the amount of money held as collateral and cannot be used. This method could be used when buying back a short position. Args:   -=  amount : Value of collateral.  dt : datetime of the update  message : Reason of the update. Can be, for example: \"Step update\", \"Enter short position for {ticker}\", etc. Returns:     - : None Raises:   -=  RuntimeError : If the amount of collateral is bigger than the current cash in the account. ",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_cash",
"url":38,
"doc":"The amount of cash available in the account. This is the amount of cash that can be used to buy securities. total_cash - collateral = cash Returns:     - : available cash",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_transactions",
"url":38,
"doc":"Return a deepcopy of the transactions list. Returns:     - : The transactions list",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_total_cash",
"url":38,
"doc":"The total amount of cash in the account. Not deducing collateral. This include cash that cannot be used to buy securities. Returns:     - : Total cash",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_state",
"url":38,
"doc":"This method export the account object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.account.Account.load_state",
"url":38,
"doc":"This method load a Account object from a dictionary. Args:   -=  dict_data : The dictionary to load from Returns:     - : The Account object",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata",
"url":24,
"doc":"This class is meant to contain all the information needed to reproduce the results of the backtest of a startegy Usually, the dataset must be big, so it is recomended to write in the description how to acquire the dataset,or make a script that download it and save the script. This class contains the metadata of the strategy. Args:   -=  strategy_name : The name of the strategy. If None, the name of the class will be used.  description : The description of the strategy. It is strongly recommended to write steps on how to reproduce the results here. If description is None, the docstring of the strategy will be used.  author : The author of the strategy. If None, the git author will be used.  version : The version of the strategy. If None, the git commit hash will be used. If no git repository, it will be \"Unknown\"  time_res : The time resolution. If None, the automatically found time resolution will be saved. It is the task of the broker to provide the time resolution. (Not handled in this class)  save_code : Whether to save the code of the strategy. If True, the code will be saved.  hash_only : Only used if save_code is True. If True, only the hash of the code will be saved. (It can spare storage space)  file_blacklist : Files to not include in the code saved. It is a list of strings with the file paths relative to the current working directory.  code_path : The path to the root folder where to search for the code. Default is the current working directory (If None). If no ' ' is present in the path, it will be added at the end to search for py files. "
},
{
"ref":"backtest.engine.metadata.Metadata.init",
"url":24,
"doc":"This method is used to initialize the metadata object from the Backtest object (When the simulation has started) Args:   -=  strategy : The strategy object. (Used to get its name  backtest_parameters : The parameters of the backtest object (Init paraeters)  tickers : The tickers used in the backtest  features : The features used in the backtest (Columns)  run_duration : The duration of the backtest (in seconds) Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.get_git_author",
"url":24,
"doc":"This method return the git author name. Returns:     - : git author name",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.load_code",
"url":24,
"doc":"This method load the code of the strategy. Args:   -=  path : The path to search for the code. Default is the current working directory. (And ignore venv)  checksum : Whether to return only the checksum of each file.  ignore : Files to ignore when loading the code. Returns:     - : The code of the strategy",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.get_git_commit",
"url":24,
"doc":"This method return the git commit hash. Returns:     - : git commit hash",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.export",
"url":24,
"doc":"This method export the metadata to a JSONable dictionary. Note: The file_blacklist parameter is not saved (and not loaded) for privacy purposes. Returns:     - : The state of the object as a dictionary",
"func":1
},
{
"ref":"backtest.engine.metadata.Metadata.load",
"url":24,
"doc":"This method load the metadata from a dictionary. NOTE: The file_blacklist parameter is not loaded (and not saved) for privacy purposes. Args:   -=  data : The dictionary to load the metadata from. Returns:     - : The metadata object",
"func":1
},
{
"ref":"backtest.engine.trade.TradeType",
"url":25,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.trade.TradeType.available",
"url":25,
"doc":"",
"func":1
},
{
"ref":"backtest.engine.trade.TradeType.BuyLong",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeType.SellLong",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeType.SellShort",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeType.BuyShort",
"url":25,
"doc":""
},
{
"ref":"backtest.engine.trade.TradeOrder",
"url":25,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"backtest.engine.trade.TradeOrder.export",
"url":25,
"doc":"This method export the trade order object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.trade.TradeOrder.load",
"url":25,
"doc":"This method loads a trade order object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.trade.Trade",
"url":25,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"backtest.engine.trade.Trade.getCost",
"url":25,
"doc":"This method calculates the upfront cost of the trade. It ignores the cost of borrowing the securities. Note: It doesn't include transaction costs nor the cost of borrowing the securities. Returns:     - : The upfront cost of the trade",
"func":1
},
{
"ref":"backtest.engine.trade.Trade.export",
"url":25,
"doc":"This method export the trade object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.trade.Trade.load",
"url":25,
"doc":"This method loads a trade object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.transaction.TransactionType",
"url":26,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.transaction.TransactionType.from_str",
"url":26,
"doc":"",
"func":1
},
{
"ref":"backtest.engine.transaction.TransactionType.DEPOSIT",
"url":26,
"doc":""
},
{
"ref":"backtest.engine.transaction.TransactionType.WITHDRAWAL",
"url":26,
"doc":""
},
{
"ref":"backtest.engine.transaction.Transaction",
"url":26,
"doc":"Data class"
},
{
"ref":"backtest.engine.transaction.Transaction.export",
"url":26,
"doc":"This method export the trade order object to a JSONable dictionary. Returns:     - : The object's state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.transaction.Transaction.load",
"url":26,
"doc":"This method load a Transaction object from a dictionary. Args:   -=  data : The dictionary to load from Returns:     - : The Transaction object",
"func":1
},
{
"ref":"backtest.engine.strategy.Strategy",
"url":27,
"doc":"This is the base class of strategies. To create a strategy, you should inherit from this class and implement the run method. The run method is called at each time step to compute the strategy. You can also override the __init__ method to add attributes to the strategy. If you do so, you should also override the save and load methods to save the strategy in a different format (by default it is pickle). Warning: You should not override the init and the __call__ method. The init, and notice it doesn't have the underscores like __init__, is used to bind the strategy to the backtest object. This is done under the hood. The __call__ method is used to dispatch the data to the run method. Overriding it might ignore some safety checks or statistics calculations.  While implementing the run method: You SHOULD NOT change the state of the account, the portfolio or the broker with the exception of calling the methods below on the broker object. If you modify the state of one of these objects, you could encounter bugs and false backtest results. The only methods you should call on the broker object are: - broker.buy_long( .) - broker.sell_long( .) - broker.buy_short( .) - broker.sell_short( .) Attributes: account: The account object broker: The broker object available_time_res: The available time resolutions portfolio: The portfolio object (Alias of broker.portfolio) Example: >>> class MyStrategy(Strategy):  . def run(self, data, timestep):  . for ticker in data.main.tickers:  . chart = data.main[ticker].chart  . if len(chart) > 2 and F.crossover(chart[\"MACD\"], chart[\"MACD_SIGNAL\"]) and chart[\"MACD\"].iloc[-1] < 0:  . if ticker not in self.broker.portfolio.long:  . self.broker.buy_long(ticker, 500)  . if ticker in self.broker.portfolio.long and F.crossunder(chart[\"MACD\"], chart[\"MACD_SIGNAL\"]):  . self.broker.sell_long(ticker, 500)  ."
},
{
"ref":"backtest.engine.strategy.Strategy.init",
"url":27,
"doc":"YOU SHOULD NOT OVERRIDE THIS METHOD Args:   -=  account : The account object  broker : The broker object  available_time_res : The available time resolutions ",
"func":1
},
{
"ref":"backtest.engine.strategy.Strategy.run",
"url":27,
"doc":"This method is used to compute the strategy at each time step. It is in this method that the strategy logic is implemented. Args:   -=  data : The data to use for the strategy  timestep : The current time step ",
"func":1
},
{
"ref":"backtest.engine.strategy.Strategy.save",
"url":27,
"doc":"This method is used to save the state of the strategy to a file. If you would like to save in another format, you can override this method and the load method. Note: To avoid saving things twice, we set the account, broker and available_time_res to None before saving. Only the other attributes will be saved. (If any) Args:   -=  path : The path to save the strategy (.pkl) ",
"func":1
},
{
"ref":"backtest.engine.strategy.Strategy.load",
"url":27,
"doc":"This method is used to load the state of a strategy from a file. If you would like to save in an other format, you can override this method and the save method. Args:   -=  path : The path to load the strategy from. (.pkl) ",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase",
"url":28,
"doc":"Children of this class are used to control the money flow in and out of the account during the backtest. Each method are called at the beginning of the time period (day, week, month, year) and the user can decide to deposit or withdraw money from the account. For example, If I want to deposit 1000$ every month, I would do it in the every_month method and 1000$ would be deposited at the beginning of every month. To access the account, just use the self.account attribute. However, you must not modify the account in any way. To add or remove money from the account, make your overriden method return the amount of money added(Positive) or removed(Negative) from the account. For example, if you want to deposit 1000$ every month, you would do: override the every_month method and return 1000. If you want to withdraw 1000$ every month, you would do the same thing but return -1000 instead. If you want to do your deposit/withdrawal based on information from your portfolio or your broker, use the attributes: self.broker.portfolio or self.broker. You also need to return a comment on the transaction that can be None. Check the example below for more information.  Again, if you use the broker, the account or the strategy, Make sure that they aren't modified in any way! DO NOT override the 'init' method. Instead, override the __init__ method if you need to initialize some variables. Attributes: broker: The broker object account: The account object strategy: The strategy object transactions: A list of all transactions made by the cash controller total_deposited: The total amount of money deposited in the account by the cash controller Example: >>> from backtest.engine import CashControllerBase >>>  Deposit 1000$ in the account if the available cash is below 1000$ (Check every month) >>> class MyCashController(CashControllerBase):  . def every_month(self, timestamp: datetime) -> Tuple[float, Optional[str :  . if self.account.available_cash < 1000:  . return 1000, \"Fund deposit\"  ."
},
{
"ref":"backtest.engine.cashController.CashControllerBase.init",
"url":28,
"doc":" Args:   -=  account : The account  broker : The broker [Shoudl not be modified ] ",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_day",
"url":28,
"doc":"This method is called every day during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_week",
"url":28,
"doc":"This method is called every week during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_month",
"url":28,
"doc":"This method is called every month during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.CashControllerBase.every_year",
"url":28,
"doc":"This method is called every year during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController",
"url":28,
"doc":"This class is a simple cash controller that will deposit ow withdraw a fixed amount of money at the beginning of every period. If a period's amount is 0 (Default), it won't deposit or withdraw funds."
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_day",
"url":28,
"doc":"This method is called every day during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_week",
"url":28,
"doc":"This method is called every week during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_month",
"url":28,
"doc":"This method is called every month during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.every_year",
"url":28,
"doc":"This method is called every year during the backtest.",
"func":1
},
{
"ref":"backtest.engine.cashController.SimpleCashController.init",
"url":28,
"doc":" Args:   -=  account : The account  broker : The broker [Shoudl not be modified ] ",
"func":1
},
{
"ref":"backtest.engine.tsData.DividendFrequency",
"url":29,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.tsData.DividendFrequency.from_delta",
"url":29,
"doc":"",
"func":1
},
{
"ref":"backtest.engine.tsData.DividendFrequency.nearest",
"url":29,
"doc":"Get the nearest value in available_values. (Kinda like a custom round( Args:   -=  value : The value to approximate  available_values : The available values to approximate to Returns:     - : The approximation (nearest value)",
"func":1
},
{
"ref":"backtest.engine.tsData.DividendFrequency.NO_DIVIDENDS",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.MONTHLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.QUARTERLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.BIANNUALLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.tsData.DividendFrequency.YEARLY",
"url":29,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimeResExtender",
"url":31,
"doc":"Helper class that provides a standard way to create an ABC using inheritance."
},
{
"ref":"backtest.engine.time_resolution_extenders.TimeResExtender.extend",
"url":31,
"doc":"Extend the data with new time resolutions. By default, it uses the single_extend method to extend each timeseries data independently. However, it is possible to override this method and bypass the single_extend method to extend the data in a more complex way or to optimize the process. Args:   -=  data : The current data statically acquired. (Fetch from sources)  main_timestep : The index of the timeseries data in data list to use as the main series. Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders.TimeResExtender.single_extend",
"url":31,
"doc":"Extend a single timeseries data with new time resolutions. Override this method Args:   -=  data : The current data statically acquired. (Fetch from sources) Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod",
"url":31,
"doc":"Create a collection of name/value pairs. Example enumeration: >>> class Color(Enum):  . RED = 1  . BLUE = 2  . GREEN = 3 Access them by: - attribute access: >>> Color.RED  - value lookup: >>> Color(1)  - name lookup: >>> Color['RED']  Enumerations can be iterated over, and know how many members they have: >>> len(Color) 3 >>> list(Color) [ ,  ,  ] Methods can be added to enumerations, and members can have their own attributes  see the documentation for details."
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.THIRTY_MINUTES",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_HOUR",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.FOUR_HOURS",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_DAY",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_WEEK",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.TimePeriod.ONE_MONTH",
"url":31,
"doc":""
},
{
"ref":"backtest.engine.time_resolution_extenders.BasicExtender",
"url":31,
"doc":"This class provide an easy top implement extender for basic time resolutions such as 30 minutes, 1 hour, 4 hours, 1 day, 1 week, and 1 month. It assumes to have has main timestep (In the backtest object) a time resolution smaller than the value chose. For example, if the main timestep is 1 day, it will not work to extend the data to 30 minutes or 4h. If you have multiple static timestep that you want to extend, you can override the extend method to handle this case, or directly derive a new class from TimeResExtender. Example: >>> extender = BasicExtender(TimePeriod.ONE_DAY) + BasicExtender(\"1w\") >>>  Given that the main timeresolution of the static data is smaller than one day. Ex: 30 minutes >>>  The data will have a time resolution of 30 minutes, 1 day and 1 week. >>> data: List[Dict[str, TSData =  . >>> data += extender.extend(data)"
},
{
"ref":"backtest.engine.time_resolution_extenders.BasicExtender.single_extend",
"url":31,
"doc":"Extend a single timeseries data with new time resolutions. Override this method Args:   -=  data : The current data statically acquired. (Fetch from sources) Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.time_resolution_extenders.BasicExtender.extend",
"url":31,
"doc":"Extend the data with new time resolutions. By default, it uses the single_extend method to extend each timeseries data independently. However, it is possible to override this method and bypass the single_extend method to extend the data in a more complex way or to optimize the process. Args:   -=  data : The current data statically acquired. (Fetch from sources)  main_timestep : The index of the timeseries data in data list to use as the main series. Returns:     - : The new data with the new time resolutions. (Do not mutate the original data)",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult",
"url":32,
"doc":"This class is used to store the result of a backtest. It contains all the information about the backtest Args:   -=  strategy_name : The name of the strategy  metadata : The metadata object  start : Start date of the backtest data  end : End date of the backtest data  intial_cash : The initial cash of the account  added_cash : The cash added to the account (or removed) with the CashController  market_index : The market index time series (Price/score evolution across time)  broker : The broker object used to backtest the strategy  account : The account object used to backtest the strategy  risk_free_rate : The risk free rate used to compute the ratios [%]. (Usually the estimated policy rate) "
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.get_ohlc",
"url":32,
"doc":"Return a OHLC dataframe of the equity history corresponding to the period. Args:   -=  period : The period to use to make the OHLC dataframe Returns:     - : The OHLC dataframe",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.compute_sharp_ratio",
"url":32,
"doc":"Compute the sharp ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sharp ratio of the strategy",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.compute_sortino_ratio",
"url":32,
"doc":"Compute the sortino ratio of the strategy on a weekly basis Args:   -=  risk_free_rate : The risk free rate or MAR (Minimum acceptable return) Returns:     - : The sortino ratio of the strategy",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.compute_calmar_ratio",
"url":32,
"doc":"Compute the calmar ratio of the strategy Args:   -=  yearly_max_drawdown : The yearly maximum drawdown of the strategy Returns:     - : The calmar ratio of the strategy",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.get_drawdown",
"url":32,
"doc":"Get the maximum drawdown of the strategy for each timestep (Causally - so looking back in time) Args:   -=  equity_history : The equity history of the strategy (Worth of the portoflio evolution over time)  equity_timestamps : The timestamps of the equity history  window : The lookback window to use to compute the drawdown Returns:     - : A time series of the maximum drawdown of the strategy for each time steps",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.strided_arr",
"url":32,
"doc":"Create a strided array to compute the rolling window of an array Args:   -=  a : The array  window : The window size Returns:     - : The strided array. Shape(len(a) - window + 1, window)",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.load_state",
"url":32,
"doc":"Load a backtest result from a state dictionary Args:   -=  data : The state dictionary Returns:     - : The backtest result",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.save",
"url":32,
"doc":"Save the backtest result to a JSON file with the .bktst extension if none is provided. About the .bktst extension: This is the fileformat for a backtest result. It is a JSON file that contains all the information about the backtest. It is a human readable file that can be used to share backtest results with other people. Also, it can be loaded by this module so that the backtest result can be analyzed later. Args:   -=  path : The path to save the backtest result. If no extension is provided, the .bktst extension will be added. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.load",
"url":32,
"doc":"Load a backtest result from a JSON file Args:   -=  path : The path to the backtest result file Returns:     - : The backtest result",
"func":1
},
{
"ref":"backtest.engine.backtestResult.BackTestResult.toAnalyser",
"url":32,
"doc":"Convert the backtest result to an analyser object to visualize the backtest results Returns:     - : The analyser object",
"func":1
},
{
"ref":"backtest.engine.record.Record",
"url":34,
"doc":"This class contains information about a stock and is pass to the strategy. Args:   -=  chart : The prepared chart of the stock  ticker : The ticker of the stock  time_res : The idx in the list of resolution of the backtest object of the time resolution of the record.  marginable : Whether the stock is marginable  shortable : Whether the stock is shortable  div_freq : The dividend frequency of the stock  short_rate : The short rate of the stock  next_tick : The next tick of the stock "
},
{
"ref":"backtest.engine.record.Record.next_tick",
"url":34,
"doc":"This method is used to get the next tick of the stock. Returns:     - : The next tick of the stock"
},
{
"ref":"backtest.engine.record.Records",
"url":34,
"doc":"Class containing multiple records for a given time resolution. You can access the record like a list with the index of the record being the index of the ticker in the list of tickers. You can also access the record by the string of the ticker like a dictionary. You can iterate over the records like a dictionary (ticker, record). Finally, you can check if a ticker is in the records like a dictionary. Attributes: records: The records. The keys are the tickers of the securities. tickers: The tickers of the securities in the same order as the records attribute. features: The features of the records. It is the columns of the charts. time_res: The time resolution time_res_idx: The index of the time resolution in the available_time_res attribute of the backtest object window: The window size (lookback period) of the records. Used when exporting to numpy. Implements: __getitem__, __setitem__, __iter__, __contains__ Args:   -=  records : The records. If a list, it will be converted to a dictionary internally. If a dictionary, the keys will be the tickers of the securities.  time_res : The time resolution  time_res_idx : The index of the time resolution in the available_time_res attribute of the backtest object  window : The window size (lookback period) of the records. Used when exporting to numpy. "
},
{
"ref":"backtest.engine.record.Records.numpy",
"url":34,
"doc":"This method will return the charts as a numpy array. The array might contain nan values if the chart is not long enough to fill the window. Returns:     - : A numpy array of the shape (n, w, p) where n is the number of securities, w is the window size and p is the number of features.",
"func":1
},
{
"ref":"backtest.engine.record.Records.to_list",
"url":34,
"doc":"Convert the Records object to a list of Record Returns:     - : A list of Record",
"func":1
},
{
"ref":"backtest.engine.record.Records.update_features",
"url":34,
"doc":"This method will update the features attribute to the new features set based on the columns of the charts. Assuming all the charts have the same features. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.record.RecordsBucket",
"url":34,
"doc":"Class containing multiple Records objects for all time resolutions. You can access each Records object by their corresponding time resolution or their index in the available_time_res attribute of the backtest object. You can also iterate over the Records objects like a dictionary (time resolution, Records object). To simplify the access of the Records object associated with the main time resolution, you can use the main attribute. Attributes: records: The Records objects. The keys are the time resolutions. available_time_res: The available time resolutions main_timestep: The index of the main time resolution in the available_time_res attribute of the backtest object Args:   -=  records : The records  available_time_res : The available time resolutions "
},
{
"ref":"backtest.engine.record.RecordsBucket.main",
"url":34,
"doc":"Get the main timestep set of records Returns:     - : The main timestep set of records"
},
{
"ref":"backtest.engine.broker.MarginCall",
"url":35,
"doc":"Data class to store info about margin calls Args:   -=  time_remaining : Time remaining in number of steps until liquidation  amount : Amount in $ that needs to be added to account to come out of margin call "
},
{
"ref":"backtest.engine.broker.MarginCall.export",
"url":35,
"doc":"This method export the margin call object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.MarginCall.load",
"url":35,
"doc":"This method load a margin call object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.BrokerState",
"url":35,
"doc":"Data class to store message from broker to strategy"
},
{
"ref":"backtest.engine.broker.BrokerState.export",
"url":35,
"doc":"This method export the broker state object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.BrokerState.load",
"url":35,
"doc":"This method load a broker state object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.StepState",
"url":35,
"doc":"Record the state of the broker at each steps for easier strategy debugging Args:   -=  timestamp : The date and time of the current step  worth : The worth of the portfolio  pending_orders : The pending orders that were not executed  filled_orders : The orders that were executed at the current step  margin_calls : The margin calls active at the current step "
},
{
"ref":"backtest.engine.broker.StepState.export",
"url":35,
"doc":"This method export the step state object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.StepState.load",
"url":35,
"doc":"This method load a step state object from a dictionary. Args:   -=  data : The dictionary containing the object state Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.Broker",
"url":35,
"doc":"When using margin, you need to add a column in the data called 'marginable' that is bool corresponding if a stock can have margin or not. Note: If there is not enough cash in the account when monthly fees are deduced, the strategy fills a bankruptcy, and the simulation stops. Args:   -=  bank_account : The bank account holding cash and collateral with the initial cash set.  commission : The commission to be paid for each trade. This parameter cannot be set if relative_commission is set. And vice versa. If commission and relative_commission are both None, the commission is set to 0.  relative_commission : The commission to be paid for each trade as a ratio (0-1) of the trade value. This parameter cannot be set if commission is set. And vice versa.  margin_interest : The margin interest rate. It is the interest rate charged on borrowed money. It is calculated daily and charged monthly.  min_initial_margin : The initial margin required to buy a stock on margin. It is a ratio (0-1) of the stock's value. Example: 50% initial margin is 0.5  min_maintenance_margin : The minimum margin required to keep a stock on margin before a margin call. It is a ratio (0-1) of the stock's value. Example: 25% maintenance margin is 0.25  liquidation_delay : The time a margin call has to be active before the broker liquidate positions to pay the margin call. (Must be grater than 0, and an int)  min_initial_margin_short : The minimum initial margin required to sell a stock short. It is a ratio (0-1)  min_maintenance_margin_short : The minimum maintenance margin required to keep a stock short before a margin call. It is a ratio (0-1) of the stock's value. Raises:   -=  ValueError : If both commission and relative_commission are set.  ValueError : If relative_commission is not None and not between 0 and 1  ValueError : If commission is not None and smaller than 0  ValueError : If margin_interest is not between 0 and 1  ValueError : min_initial_margin and min_maintenance_margin are not between 0 and 1  ValueError : If min_maintenance_margin_short and min_initial_margin_short are not between 0 and 1  ValueError : If min_maintenance_margin is greater than or equal to min_initial_margin  ValueError : If min_maintenance_margin_short is greater than or equal to min_initial_margin_short "
},
{
"ref":"backtest.engine.broker.Broker.buy_long",
"url":35,
"doc":"The strategy calls this method to open a long position. The position can be bought on margin. Args:   -=  ticker : The ticker of the security to buy  amount : The amount of shares to buy  amount_borrowed : The amount of shares to buy on margin. (Won't be charged in the account)  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the maximum price to buy.Meaning the order will be executed if the price is lower or equal to the limit. The second value is the minimumprice to buy. Meaning the order will be executed if the price is higher or equal to the limit. If the limit is(None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.sell_long",
"url":35,
"doc":"The strategy calls this method to close a long position. Args:   -=  ticker : The ticker of the security to sell  amount : The amount of shares to sell  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the minimum price to sell(Stop loss). Meaning the order will be executed if the price is lower or equal to the limit. The second valueis the maximum price to sell. Meaning the order will be executed if the price is higher or equal to the limit.If the limit is (None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.sell_short",
"url":35,
"doc":"The strategy calls this method to open a short position. Args:   -=  ticker : The ticker of the security to sell  amount_borrowed : The amount of shares to sell short.  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the minimum price to sell.Meaning the order will be executed if the price is lower or equal to the limit. The second value is the maximum price to sell. Meaning the order will be executed if the price is higher or equal to the limit.If the limit is (None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.buy_short",
"url":35,
"doc":"The strategy calls this method to close a short position. Args:   -=  ticker : The ticker of the security to buy  amount_borrowed : The amount of shares to buy back.  expiry : The expiry date of the order. If the order is not executed before the expiry date, it is automatically cancelled. If the expiry date is None, the order is never cancelled.  price_limit : The price limit of the order. The first value of the tuple is the maximum price to buy.Meaning the order will be executed if the price is lower or equal to the limit. The second value is the minimumprice to buy. Meaning the order will be executed if the price is higher or equal to the limit. If the limit is(None, None) the order will be executed at the next open price. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.tick",
"url":35,
"doc":"The simulation calls this method after the strategy has run. It will calculate interests and margin call if applicable. It will do trades that can be done in the trade queue at the next open. Args:   -=  timestamp : The date and time of the current step  next_timestamp : The date and time of the next step where orders will be evaluated/bought  security_names : A list of all securities where the index of each ticker is the index of the data of the corresponding security in the 'next_tick_data' parameter along the first axis (axis=0).  current_tick_data : An array of prices of each security for the current step(n_securities, 4) The 4 columns of the array are: Open, High, Low, Close of the next step.  next_tick_data : An array containing prices of each security for the next step shape(n_securities, 4) The 5 columns of the array are: Open, High, Low, Close and Stock Splits of the next step.  marginables : A boolean array of shape (n_securities, 2) [Marginable, Shortable) where True means that the security can be bought on margin / sold short and False means that it cannot be bought on margin / sold short.  dividends : A float array of shape (n_securities, ) containing the dividends of each security for the current step.  div_freq : The frequency that the security is paying dividends.  short_rates : The interest rates for each security that the user held overnight. Shape(n_securities, )  last_tick : Whether it is the last tick of the simulation. If it is, the broker will liquidate all positions and charge interests. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.pending_orders",
"url":35,
"doc":"Return a copy of the pending orders"
},
{
"ref":"backtest.engine.broker.Broker.compute_dividend_payout",
"url":35,
"doc":"Compute the dividend payout of a long position Args:   -=  position : The position to calculate dividend payout  div_freq : The frequency that the security is paying dividends.  dividends : The actual dividends payout for 1 share and for the period in div_freq. Returns:     - : Dividend payout Raises:   -=  RuntimeError : If the position is not long ",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.get_worth",
"url":35,
"doc":"Get the worth of the portfolio. (Doesn't include the transaction cost as if we would sell the positions) Formula: worth = cash + sum(long_positions) - sum(short_positions) where: long_positions = sum(long_position_amount  close_price - debt) short_positions = sum(short_position_amount  close_price) cash: The total cash in portfolio excluding all collateral. Args:   -=  security_names : A list of all securities where the index of each ticker is the index of the data of the corresponding security in the 'current_tick_data' parameter along the first axis (axis=0).  current_tick_data : An array containing prices of each security for the current step shape(n_securities, 4) Returns:     - : worth in dollars",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.new_margin_call",
"url":35,
"doc":"Create a new margin call and appends it to the other margin calls. Do not forget to remove money from account if necessary. It also add the value to the debt record. Args:   -=  value : The value that needs to be added to the account to cover margin call Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.remove_margin_call",
"url":35,
"doc":"Remove a margin call from the list of margin calls. It also removed the debt in the debt record. Args:   -=  key : The key of the margin call to remove Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.make_trade",
"url":35,
"doc":"This method is call to make trades (convert tradeOrders to trade). Make the trade if price is within limits Args:   -=  order : TradeOrder  security_price : The security price (Open, High, Low, Close, Splits)  timestamp : The time where securities will be bought (Usually the next step)  marginable : If the security is marginable.  shortable : If the security is shortable. Returns:     - : True if the trade was successful (Needs to remove from pending trades) And False otherwise Raises:   -=  RuntimeError : If the trade cannot be executed because of margin or cash issues. ",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.get_state",
"url":35,
"doc":"Get the current state of the broker as a JSONable dictionary (deepcopy Note: - It doesn't include the account's state. Returns:     - : The broker's state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.broker.Broker.load_state",
"url":35,
"doc":"Load a broker from a state dictionary Args:   -=  data : The state dictionary  account : The account to which the broker is linked (Loaded by the BacktestResult object) Returns:     - : The broker",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest",
"url":15,
"doc":" Args:   -=  data : The data on which to run the backtest. It is a list of dictionaries where each dictionary represents a group of time series data. The key is the ticker and the value is the TSData object. IMPORTANT: The length of each time series (charts) must be the same with the same index. If they are not, you need to pad the data with nan.  strategy : The strategy to test  metadata : A metadata object. This is useful to store information about the backtest to add context.  market_index : The TSData object containing the reference market index. (Used to compare the strategy performances to the market)  main_timestep : The index of the timeseries data in data list to use as the main series. i.e. the frequency at which the strategy is run. The other timeseries will be passed to the strategy as additional data. For example, if our data is a list of two dictionaries, the first one containing hourly data and the second one containing daily data, and we extend the daily data to weekly data, we would set main_timestep to 1. (The second dictionary) to run our strategy at each open market days.  initial_cash : The initial cash in bank account  commission : The absolute commission. In $ per trade  relative_commission : The relative commission. In % of the trade value. Example: 5% would be 5  margin_interest : The interest rate on margin. In % of the margin value. Example: 5% would be 5  min_initial_margin : The minimum initial margin. In % of the trade value. Example: 5% would be 5  min_maintenance_margin : The minimum maintenance margin. In % of the trade value. Example: 5% would be 5  liquidation_delay : The delay before liquidating a position in margin call. In timestep. Example, if the delay is 2 and the main time resolution is daily, the position will be liquidated 2 days  min_initial_margin_short : The minimum initial margin for short positions. In % of the trade value.  min_maintenance_margin_short : The minimum maintenance margin for short positions. In % of the trade value.  broker : The Broker class to use. This is useful to use a custom broker. The broker class must inherit from the Broker class.  account : The Account class to use. This is useful to use a custom account. The account class must inherit from the Account class.  window : The lookback period for the strategy. The number of datapoint to pass to the strategy at each timestep. (The number of datapoint in the main timestep. There might be more or less for others)  default_marginable : In case there is no column \"Marginable\" in the data, this value will be used to know if the security is marginable.  default_shortable : In case there is no column \"Shortable\" in the data, this value will be used to know if the security is shortable.  risk_free_rate : The risk-free rate in %. Used to calculate performance ratios like the Sharpe ratio.  default_short_rate : The short rate in % in case there is no column 'Short_rate' in the data.  sell_at_the_end : Whether to sell every open position at the end or not. If True, the strategy will sell the positions at the end of the backtest.  cash_controller : A cash controller object to control the money flow in and out of the bank account during the backtest. This is useful to simulate the effect of, for example, weekly deposit or monthly withdrawal.  verbose : 0: No print, 1: Only errors, 2: Errors and warnings, 3: All  time_res_extender : A time resolution extender object. This is useful to add time resolutions to the data  indicators : An Indicator set object. This is useful to add indicators to the data. The indicators are calculated at each timestep and passed to the strategy. It can also be a list with the same length as the number of time resolution. Each element of the list will be an IndicatorSet object to use for the corresponding time resolution. If it is a dictionary, the keys will be the index of the time resolution and the values will be the IndicatorSet object to use for the corresponding time resolution. If a dictionary is used, make sure there is at least a key for the main time resolution. If the streaming parameter is True for one of the IndicatorSet, the streaming will be activated for every supported indicators. "
},
{
"ref":"backtest.engine.backtest.Backtest.apply_indicators",
"url":15,
"doc":"Apply the indicators to the data (All tickers in time res) Args:   -=  data : The list of records to apply the indicators to  time_res_idx : The current time resolution  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The updated data",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.run_indicator",
"url":15,
"doc":"Run the indicators on a single chart. Args:   -=  data : The chart data OHLCV  previous_data : The previously cached data. Used when streaming is True. If streaming is False, this parameter is ignored. This should be a dataframe with the same index as the data. This means that the indicators points that needs to be calculated should be nan, and one already calculated should be the previously calculated values. The columns names should be the output columns names of the indicators.  indicators : The indicatorSet to use.  streaming : Whether to use the streaming capabilities of the indicators or not.  bigger_res : Whether we are computing the indicator for a bigger time resolution or not. If True and we are in streaming mode, the last cache datapoint will be set to nan in order to recompute it. Returns:     - : The new data",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.run",
"url":15,
"doc":"Run the backtest simulation with the given data and strategy. It will show a progress bar showing the current progress. It will save the results and all the statistics into a BackTestResult object in the results attribute, or returned value of this method. Returns:     - : BackTestResult object containing all the results, statistics, debug info, etc.",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.stadardize_timesteps",
"url":15,
"doc":"Optionnaly reformat timesteps_list. Can be useful when indexes are variable across stocks Args:   -=  timesteps_list : The list of timesteps Returns:     - : The reformatted list of timesteps",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: (Read the warning below if your data contains higher resolution than main res) For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. IMPORTANT: If you need this method in your setup, you should override it since it may not work for your setup. In fact, it is hard to forge new candles for any arbitrary time resolution from discrete timeseries where timesteps might not correctly align. You should take this into account when making this method. TO OVERRIDE THIS METHOD: Just override it like any other method. You can also use the default method by calling 'self.default_forge_last_candle' and complement it. To suppress the warning, you can override this method by only calling the default 'self.default_forge_last_candle' Args:   -=  data : The data  prepared_data : The already prepared data.  current_time_res : The current time resolution  timestep : The current timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.engine.backtest.Backtest.default_forge_last_candle",
"url":15,
"doc":"Forge new candle by cropping the last candle for the data with bigger time resolution than the main timestep to avoid peeking into the future. (Data leaking) How this default method works: For each Tickers: 1. Find the last candle compared to current time step with the current resolution. (Get index and Open) 2. Find the last candle for the ticker with main resolution. (Get index and Close) 3. Using the main resolution, get the series between the beginning of the candle (Current resolution) and the current timestep. (This will be a series of intra-candle data) This is where it can get tricky because, depending on your data, the start idx (computed in step 1) might not align with any timesteps of the series in the main resolution. In this default method, we will use the next candle the nearest of the desired start idx of the main resolution data. (Default behavior of pandas) 4. Get High by computing the max of the maxes of the intra-candle data and the Low by computing the min of the mins of the intra-candle data. The volume is obtained by summing the volume of the intra-candle data. 5. Return the new candle by using computed High Low Open Close and Volume. DO NOT OVERRIDE THIS METHOD: If you need to override a candle forging method, override the method 'forge_last_candle' instead. Args:   -=  data : The data  current_time_res : The current time resolution (to forge)  timestep : The current timestep  main_timestep : The main timestep Returns:     - : A list of the forged candles: List[Tuple[Open, High, Low, Close, Volume, Stock Split, ticker ",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position",
"url":36,
"doc":"Data class holding info about a position"
},
{
"ref":"backtest.engine.portfolio.Position.update_time_stock_idx",
"url":36,
"doc":"Call this method to update the time_stock_idx. It will be used to calculate the dividends due to the shareholders. Call this method at the end of each day. Args:   -=  timestep_elapsed : The number of seconds elapsed since the last call to this method Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.dividends_got_paid",
"url":36,
"doc":"Call this method to reset last dividends date. Useful when calculating how much dividends the user should have Args:   -=  timestamp : The timestamp of dividend payment Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.split",
"url":36,
"doc":"Call this method when a stock split occurs. It will update the average price and the amount. - $new_price = old_price / ratio$ - $new_amount = old_amount  ratio$ Args:   -=  ratio : The ratio of the split. let's say it is 7:1, then the ratio is 7, 2:3, then the ratio is 2/3 Returns:     - : The two new positions",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.export",
"url":36,
"doc":"Export the position to a dictionary JSONable Returns:     - : The object as a dictionary",
"func":1
},
{
"ref":"backtest.engine.portfolio.Position.load",
"url":36,
"doc":"Load the object from a dictionary Args:   -=  data : The dictionary to load from Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.portfolio.TradeStats",
"url":36,
"doc":"This class will hold the stats for a given trade. It will be used to calculate the stats for the whole portfolio Args:   -=  trade : The trade object (SellLong or BuyShort)  duration : The duration of the trade  profit : The profit made on the trade  rel_profit : The profit made on the trade relative to the amount invested NOT IN PERCENTAGE  ratio_owned : The ratio of the security held in account that are owned by the investor. (not bought on margin) Raises:   -=  ValueError : If the trade type is not SellLong or BuyShort (Doesn't exit a position) "
},
{
"ref":"backtest.engine.portfolio.TradeStats.export",
"url":36,
"doc":"Export the object to a JSONable dictionary Note: The duration is saved in seconds Returns:     - : A dictionary corresponding top the object's state",
"func":1
},
{
"ref":"backtest.engine.portfolio.TradeStats.load",
"url":36,
"doc":"Load the object from a dictionary Args:   -=  data : The dictionary to load from Returns:     - : The object",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio",
"url":36,
"doc":"This class will have two sub portfolios: long and short. When 'trade' is called, it will add or remove in the appropriate portfolio the security. It will also remember each trades (in a list) to recover the state at each days (For debugging purpose). Args:   -=  transaction_cost : The cost of a transaction (buy or sell) in $ or in %  transaction_relative : Whether the transaction cost is in percentage relative to transaction cost or fix price  debt_record : The amount of debt used to buy securities: {security: amount}. Passed by reference from broker. "
},
{
"ref":"backtest.engine.portfolio.Portfolio.trade",
"url":36,
"doc":"Make a trade and add it to the portfolio. Note: This class will handle the debt record. It will add the amount borrowed to the debt record when buying long and remove it when selling long. Args:   -=  trade : Can be BuyLong, SellLong, SellShort, BuyShort  correction : The correction to apply to the price of the trade. It is used to correct the price onlywhile logging the transaction. It could be used when a split happens at the next tick. If the correction is 0,it is ignored. Returns:     - : The cash change in account. If negative, withdraw. If positive, deposit. Raises:   -=  RuntimeError : If the transaction ID is already used ",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.split",
"url":36,
"doc":"Call this method when a stock split occurs. It will update the average price and the amount of the position. Args:   -=  ticker : The ticker of the security  ratio : The ratio of the split. let's say it is 7:1, then the ratio is 7, 2:3, then the ratio is 2/3 Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getShortProfit",
"url":36,
"doc":"Calculate the profit made on a short trade Args:   -=  average_sell_price : The price at which the security was sold  average_buy_price : The price at which the security was bought  qty : The number of shares in the trade Returns:     - : The profit (positive) or loss (negative) made on the trade, relative profit",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getLongProfit",
"url":36,
"doc":"Calculate the profit made on a long trade Args:   -=  average_buy_price : The price at which the security was bought  average_sell_price : The price at which the security was sold  qty : The number of shares in the trade  ratio_owned : The ratio of the security held in account that are owned by the investor. (not bought on margin)  debt : The amount of debt used to buy the security  number_of_entry : The number of time the position was entered. (Used only if transaction cost is absolute) Returns:     - : The profit (positive) or loss (negative) made on the trade, relative profit in percentage",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.estimateCost",
"url":36,
"doc":"This method can e used by external classes such as Borker to estimate the cost of a trade. Args:   -=  price : The price of the security  amount : The amount of security in the transaction (Trade)  sell : Whether the trade is a sell or not. If sell, we subtract the transaction cost from the worth. Returns:     - : Worth of transaction - transaction cost",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getShort",
"url":36,
"doc":"To get what securities are sold short to later calculate interests Returns:     - : Dictionary[security, amount]",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.getLong",
"url":36,
"doc":"To get what securities are bought long to later calculate interests (When using margin) Returns:     - : Dictionary[security, amount]",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_trades",
"url":36,
"doc":"To get the list of trades. (Make a deep copy) Returns:     - : the list of rades",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_trade_count",
"url":36,
"doc":"To get the number of trades made. Args:   -=  exit_only : If True, Only the trade that exit a position are counted Returns:     - : The number of trades",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.update_time_stock_idx",
"url":36,
"doc":"Call this method to update the time_stock_idx for each position. It will be used to calculate the dividends due to the shareholders. Args:   -=  timestep_elapsed : The number of timestep elapsed since the last call to this method Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_trade_stats",
"url":36,
"doc":"To get the stats for each trade. (Make a deep copy) Returns:     - : The dictionary of trades: { \"best_trade\": float,  In percentage \"worst_trade\": float,  In percentage \"win_rate\": float,  In percentage \"avg_trade\": float,  In percentage \"max_trade_duration\": float,  In days \"min_trade_duration\": float,  In days \"avg_trade_duration\": float,  In days \"profit_factor\": float,  Total gains / Total losses \"SQN\": float,  System Quality Number}",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.get_state",
"url":36,
"doc":"Return the state of the portfolio. (Make a deep copy) Returns:     - : The state of the portfolio as a dict",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.load_state",
"url":36,
"doc":"Load the state of the portfolio from a dictionary Args:   -=  data : The dictionary to load from  debt_record : The amount of debt used to buy securities: {security: amount}. Passed by reference from broker. Returns:     - : The portfolio object",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.empty",
"url":36,
"doc":"To check if the portfolio is empty Returns:     - : True if the portfolio is empty, False otherwise",
"func":1
},
{
"ref":"backtest.engine.portfolio.Portfolio.long",
"url":36,
"doc":"Return the long positions that are not empty (amount > 0)"
},
{
"ref":"backtest.engine.portfolio.Portfolio.short",
"url":36,
"doc":"Return the short positions that are not empty (amount > 0)"
},
{
"ref":"backtest.engine.account.CollateralUpdateType",
"url":38,
"doc":"[Enum] The type of collateral update. Can be: - ADD - REMOVE - UPDATE"
},
{
"ref":"backtest.engine.account.CollateralUpdateType.ADD",
"url":38,
"doc":""
},
{
"ref":"backtest.engine.account.CollateralUpdateType.REMOVE",
"url":38,
"doc":""
},
{
"ref":"backtest.engine.account.CollateralUpdateType.UPDATE",
"url":38,
"doc":""
},
{
"ref":"backtest.engine.account.CollateralUpdate",
"url":38,
"doc":"Data class holding info about a collateral update Args:   -=  amount : The amount frozen in the account as collateral (Cannot be used to buy securities)  dt : The datetime of the update.  message : A message explaining the reason of the update. (Useful for debugging the strategy)  collateral_update_type : The type of update. Can be ADD, REMOVE or UPDATE "
},
{
"ref":"backtest.engine.account.CollateralUpdate.export",
"url":38,
"doc":"This method export the trade order object to a JSONable dictionary. Returns:     - : The object's state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.account.CollateralUpdate.load",
"url":38,
"doc":"This method load a CollateralUpdate object from a dictionary. Args:   -=  data : The dictionary to load from Returns:     - : The CollateralUpdate object",
"func":1
},
{
"ref":"backtest.engine.account.Account",
"url":38,
"doc":"Object representing the bank account of the strategy. This object keeps track of the cash available in the account, the collateral used in the account and the transactions made by the strategy. Attributes: available_cash: The amount of cash available in the account. This is the amount of cash that can be used to buy securities. collateral: The amount of money that is currently being used as collateral. transactions: The transactions made by the strategy."
},
{
"ref":"backtest.engine.account.Account.update_collateral",
"url":38,
"doc":"Updates the amount of collateral in the account. This is the amount of money held as collateral and cannot be used. This should be updated at each steps because it should be dependent to the current value of the assets. Raise a RuntimeError if the amount of collateral is bigger than the current worth of the account. Args:   -=  amount : Value of collateral.  dt : datetime of the update  message : Reason of the update. Can be, for example: \"Step update\", \"Enter short position for {ticker}\", etc. Returns:     - : None",
"func":1
},
{
"ref":"backtest.engine.account.Account.add_collateral",
"url":38,
"doc":"Adds collateral to the account. This is the amount of money held as collateral and cannot be used. This method could be used when selling short a position. Args:   -=  amount : Value of collateral.  dt : datetime of the update  message : Reason of the update. Can be, for example: \"Step update\", \"Enter short position for {ticker}\", etc. Returns:     - : None Raises:   -=  RuntimeError : If the amount of collateral is bigger than the current cash in the account. ",
"func":1
},
{
"ref":"backtest.engine.account.Account.remove_collateral",
"url":38,
"doc":"Removes collateral from the account. This is the amount of money held as collateral and cannot be used. This method could be used when buying back a short position. Args:   -=  amount : Value of collateral.  dt : datetime of the update  message : Reason of the update. Can be, for example: \"Step update\", \"Enter short position for {ticker}\", etc. Returns:     - : None Raises:   -=  RuntimeError : If the amount of collateral is bigger than the current cash in the account. ",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_cash",
"url":38,
"doc":"The amount of cash available in the account. This is the amount of cash that can be used to buy securities. total_cash - collateral = cash Returns:     - : available cash",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_transactions",
"url":38,
"doc":"Return a deepcopy of the transactions list. Returns:     - : The transactions list",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_total_cash",
"url":38,
"doc":"The total amount of cash in the account. Not deducing collateral. This include cash that cannot be used to buy securities. Returns:     - : Total cash",
"func":1
},
{
"ref":"backtest.engine.account.Account.get_state",
"url":38,
"doc":"This method export the account object to a JSONable dictionary. Returns:     - : The object state as a dictionary",
"func":1
},
{
"ref":"backtest.engine.account.Account.load_state",
"url":38,
"doc":"This method load a Account object from a dictionary. Args:   -=  dict_data : The dictionary to load from Returns:     - : The Account object",
"func":1
}
]