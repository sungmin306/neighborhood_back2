from rest_framework import serializers
from .models import User


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'username',
            'Email',
            'password1',
            'password2',
        )
        model = User