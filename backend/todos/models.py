from django.db import models


class TodoManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    def all(self):
        return self.get_queryset().filter(active=True)


class Todo(models.Model):

    title = models.CharField(max_length=200)
    body = models.TextField()
    active = models.BooleanField(default=True)

    objects = TodoManager()

    def __str__(self):
        return self.title
