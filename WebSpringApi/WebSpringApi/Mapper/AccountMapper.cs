using AutoMapper;
using WebSpringApi.Data.Entities.Identity;
using WebSpringApi.Models.Account;

namespace WebSpringApi.Mapper;

public class AccountMapper : Profile
{
    public AccountMapper()
    {
        CreateMap<RegisterViewModel, UserEntity>()
            .ForMember(x => x.UserName, opt => opt.MapFrom(x => x.Email));
    }
}
