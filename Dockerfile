FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    YG_HOST=0.0.0.0 \
    YG_DB_PATH=/app/data/yeouidogold.sqlite3

WORKDIR /app

COPY . /app

RUN mkdir -p /app/data

EXPOSE 8099

CMD ["sh", "-c", "python3 server.py --site site --host 0.0.0.0 --port ${PORT:-8099}"]
