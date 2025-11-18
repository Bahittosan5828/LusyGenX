from backend_main import app

# Vercel serverless handler
def handler(request):
    return app(request.environ, request.start_response)
