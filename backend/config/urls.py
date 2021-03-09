from django.contrib import admin
from django.urls import path, include

from rest_framework import schemas
from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Todo API",
        default_version="v1",
        description="A sample API for Todo",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="hello@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todos.urls')),

    path('openapi', schemas.get_schema_view(
        title="Todo API",
        description="A sample API for Todo",
        version="1.0.0"
    ), name='openapi-schema'),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
