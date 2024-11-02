# Home page
![image](https://github.com/user-attachments/assets/fbe9d743-6b7f-439b-8d03-0de00cca6a85)

# Documentation page
![image](https://github.com/user-attachments/assets/7e5c0e39-2ed2-4196-bd92-60a83a0037f7)

# Map view
![image](https://github.com/user-attachments/assets/b0ec6644-52d8-4aae-ac84-71f5b0a5fcab)  
- Processes remote sensing weather data
- For all the cities in the database, latitute and longitude coordinates are extracted
- Using Django REST api, a call is made to the METAR API to fetch the METAR code for each city
- Statistical analysis skills:
    - **Data Gathering**: Developed a python script for a backup mechanism to scrape data from public weather data warehouses
    - **Data Cleaning**: The scraped data contains a lot of missing information, from error-prone HTML to unescaped spaces. Several data cleaning methods were developed using Regexp
    - **Categorization**: After decoding the METAR code, the remote sensing weather data was categorized into "good", "marginal" and "bad" weather using variables such as temperature, pressure and visibility
    - **Statistical Summary**: Utilized descriptive statistics such as mean, mode, interquartile range, variance, standard deviation and range to calculate additional metrics
    - **Time Series Analysis**: Considered historical data to identify patterns within the usual weather cycle

# On-the-go tools
![image](https://github.com/user-attachments/assets/40d98edf-ff66-46fe-ad13-185a371ce312)  

## METAR code decoder
![image](https://github.com/user-attachments/assets/9d122034-230b-42fb-a04a-49f83525cbb0)

![image](https://github.com/user-attachments/assets/7a0f5801-7889-4b9d-895d-344d25088297)

## Satellite images
![image](https://github.com/user-attachments/assets/9ea180b5-8cce-4407-bf7e-40fce3564dcb)

## Radar images
![image](https://github.com/user-attachments/assets/61c44ed5-ce4d-44a9-a9bf-e42e8f5c1e0c)

## Lat-Long Fetcher
![image](https://github.com/user-attachments/assets/e8c3729a-0eef-46d5-845a-454aec8aacde)

![image](https://github.com/user-attachments/assets/d6a46975-c44c-4b40-98f7-a3324c692f21)
