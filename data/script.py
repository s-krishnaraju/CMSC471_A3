import pandas as pd

# Load the dataset
file_path = "./data.csv"
df = pd.read_csv(file_path)

# Filter the dataset for Total GHGs and HFCs
df_ghg = df[df['POLLUTANT'] == 'GHG'][['TIME_PERIOD', 'OBS_VALUE']].copy()
df_hfc = df[df['POLLUTANT'] == 'HFC'][['TIME_PERIOD', 'OBS_VALUE']].copy()

# Convert year to int and emissions to float
df_ghg['TIME_PERIOD'] = df_ghg['TIME_PERIOD'].astype(int)
df_ghg['OBS_VALUE'] = df_ghg['OBS_VALUE'].astype(float)

df_hfc['TIME_PERIOD'] = df_hfc['TIME_PERIOD'].astype(int)
df_hfc['OBS_VALUE'] = df_hfc['OBS_VALUE'].astype(float)

df_ghg = df_ghg.sort_values(by='TIME_PERIOD')
df_hfc = df_hfc.sort_values(by='TIME_PERIOD')

base_value = df_ghg.iloc[0]['OBS_VALUE']
df_ghg['PERCENT_CHANGE'] = ((df_ghg['OBS_VALUE'] - base_value) / base_value) * 100

# Calculate percent change for HFC relative to the base year (first year in the data)
base_value = df_hfc.iloc[0]['OBS_VALUE']
df_hfc['PERCENT_CHANGE'] = ((df_hfc['OBS_VALUE'] - base_value) / base_value) * 100

df_ghg.to_csv("./ghg_data.csv")
df_hfc.to_csv("./hfc_data.csv")
