FROM python:3.11-slim
WORKDIR /app
COPY . /app
RUN python -m pip install --upgrade pip setuptools wheel && pip install --no-cache-dir -r requirements_txt.txt
EXPOSE 8000
CMD ["uvicorn","backend_main:app","--host","0.0.0.0","--port","8000"]
