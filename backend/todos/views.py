from rest_framework.generics import (
    ListAPIView,
    RetrieveUpdateAPIView
)

from .models import Todo
from .serializers import TodoSerializer


class ListTodo(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(RetrieveUpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
