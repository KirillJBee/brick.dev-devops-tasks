## 1. Ansible playbook
Для тестового задания Ansible инициализируется на тестовой машине через SSH по паролю (VirtualBox, Debian 12).

Пользователь (ansible_user) выполняющий playbook входит в группу sudo на тестовой машине.

Для выполнения playbook на Вашем окружении необходимо внести соотвествующие изменения в инвентарный файл *inventory.ini* с указанием IP адреса хоста (ansible_host) и пользователя (ansible_user) с соотвествующими правами.

Запуск  выполняется командой (используются учётные данные пользователя от имени котого выполняется playbook):

```tf
ansible-playbook --ask-pass --ask-become-pass playbook.yml
```

 ## 2. Web приложение на NodeJS
Запуск контейнера осуществляется командой:

```tf
docker run -d --rm -p 8000:8000 --env-file env_settings.env simple-node-app
```
Файл *env_docker.env* содержит переменные в соотвествии с заданием. 

Результат задания на скриншоте ниже:

![image](https://github.com/KirillJBee/brick.dev-devops-tasks/assets/77605315/1b38aee9-8ff2-47cd-bbbf-4bfaedfe12f4)

Запуск реплик осуществляется посредстовм команды:

```tf
docker stack deploy -c ./docker-compose.yml simple-node-app-dev
```
Файл *env_stack.env* содержит переменные в соотвествии с заданием.

Результат задания на скриншотах ниже:

![image](https://github.com/KirillJBee/brick.dev-devops-tasks/assets/77605315/9149325f-a754-462c-8a1f-d695984255af)
![image](https://github.com/KirillJBee/brick.dev-devops-tasks/assets/77605315/6590b2da-ce5f-4989-a03b-970b222f43d3)
![image](https://github.com/KirillJBee/brick.dev-devops-tasks/assets/77605315/ba48cd5e-8940-4273-acfb-4be7381890e6)




